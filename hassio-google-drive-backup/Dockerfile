ARG BUILD_FROM
FROM $BUILD_FROM
WORKDIR /app
COPY . /app
RUN chmod +x addon_deps.sh
RUN ./addon_deps.sh
RUN pip3 install --no-build-isolation --break-system-packages .
RUN python3 -c "import site, shutil; shutil.copy('config.json', site.getsitepackages()[0] + '/config.json')"

EXPOSE 1627
EXPOSE 8099
ENTRYPOINT ["python3", "-m", "backup"]