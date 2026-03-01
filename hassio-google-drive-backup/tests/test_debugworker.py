import pytest

from backup.config import Config, Setting
from backup.debugworker import DebugWorker
from backup.util import GlobalInfo
from backup.server import ErrorStore
from dev.simulationserver import SimulationServer
from .helpers import skipForWindows
from .conftest import FakeTime


@pytest.mark.asyncio
async def test_dns_info(debug_worker: DebugWorker, config: Config):
    skipForWindows()
    config.override(Setting.DRIVE_HOST_NAME, "localhost")
    await debug_worker.doWork()
    assert '127.0.0.1' in debug_worker.dns_info['localhost']
    assert 'localhost' in debug_worker.dns_info['localhost']


@pytest.mark.asyncio
async def test_bad_host(debug_worker: DebugWorker, config: Config):
    skipForWindows()
    config.override(Setting.DRIVE_HOST_NAME, "dasdfdfgvxcvvsoejbr.com")
    await debug_worker.doWork()
    assert "Name or service not known" in debug_worker.dns_info['dasdfdfgvxcvvsoejbr.com']['dasdfdfgvxcvvsoejbr.com']


@pytest.mark.asyncio
async def test_send_error_reports_true_sends_no_report(debug_worker: DebugWorker, config: Config, global_info: GlobalInfo, error_store: ErrorStore):
    # The SEND_ERROR_REPORTS setting no longer has any effect; doWork() should never send error reports
    config.override(Setting.SEND_ERROR_REPORTS, True)
    global_info.failed(Exception("boom"))
    await debug_worker.doWork()
    assert error_store.last_error is None


@pytest.mark.asyncio
async def test_send_error_reports_false_sends_no_report(debug_worker: DebugWorker, config: Config, global_info: GlobalInfo, error_store: ErrorStore):
    # Error reporting was removed, so SEND_ERROR_REPORTS=False also results in no reports
    config.override(Setting.SEND_ERROR_REPORTS, False)
    global_info.failed(Exception("boom"))
    await debug_worker.doWork()
    assert error_store.last_error is None


@pytest.mark.asyncio
async def test_health_check_timing_success(server_url, time: FakeTime, debug_worker: DebugWorker, config: Config, server: SimulationServer):
    # Only do successfull checks once a day
    await debug_worker.doWork()
    assert server.interceptor.urlWasCalled("/health")
    server.interceptor.clear()

    await debug_worker.doWork()
    assert not server.interceptor.urlWasCalled("/health")

    time.advance(hours=23)
    await debug_worker.doWork()
    assert not server.interceptor.urlWasCalled("/health")

    time.advance(hours=2)
    await debug_worker.doWork()
    assert server.interceptor.urlWasCalled("/health")


@pytest.mark.asyncio
async def test_health_check_timing_failure(server_url, time: FakeTime, debug_worker: DebugWorker, config: Config, server: SimulationServer):
    # Failed helath checks retry after a minute
    server.interceptor.setError("/health", 500)

    await debug_worker.doWork()
    assert server.interceptor.urlWasCalled("/health")
    server.interceptor.clear()

    await debug_worker.doWork()
    assert not server.interceptor.urlWasCalled("/health")

    time.advance(seconds=59)
    await debug_worker.doWork()
    assert not server.interceptor.urlWasCalled("/health")

    time.advance(seconds=2)
    await debug_worker.doWork()
    assert server.interceptor.urlWasCalled("/health")
