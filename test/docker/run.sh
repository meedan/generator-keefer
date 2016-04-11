#!/bin/bash

dir=$(pwd)
cd $(dirname "${BASH_SOURCE[0]}")
cp Dockerfile ..
cd ..

# Build
docker kill keefer-test
docker rm keefer-test
docker build -t keefer/test .

# Run
mkdir build 2>/dev/null
rm Dockerfile
docker run -d --privileged --name keefer-test -p 3333:3333 -p 5999:5999 -v "$dir/build":/app/build -v "$dir/releases":/app/releases "keefer/test" "/start/all.sh"
sleep 30
cat releases/web.log | grep ngrok
cd $dir
docker ps | grep keefer-test
