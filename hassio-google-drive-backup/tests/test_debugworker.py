import pytest

from backup.config import Config, Setting
from backup.debugworker import DebugWorker
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
