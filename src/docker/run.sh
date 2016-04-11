#!/bin/bash

dir=$(pwd)
cd $(dirname "${BASH_SOURCE[0]}")
cp Dockerfile ..
cd ..

# Build
docker kill keefer-<%= machine_name %>
docker rm keefer-<%= machine_name %>
docker build -t keefer/<%= machine_name %> .

# Run
mkdir build 2>/dev/null
rm Dockerfile
docker run -d --privileged --name keefer-<%= machine_name %> -p 3333:3333 -p 5999:5999 -v "$dir/build":/app/build -v "$dir/releases":/app/releases "keefer/<%= machine_name %>" "/start/all.sh"
sleep 30
cat releases/web.log | grep ngrok
cd $dir
docker ps | grep keefer-<%= machine_name %>
