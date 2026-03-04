#!/bin/bash

apk add python3 fping linux-headers libc-dev libffi-dev python3-dev gcc py3-pip
pip3 install --upgrade pip wheel setuptools --break-system-packages
pip3 install --trusted-host pypi.python.org --break-system-packages -r requirements-addon.txt
# Remove packages we only needed for installation
apk del linux-headers libc-dev libffi-dev python3-dev gcc