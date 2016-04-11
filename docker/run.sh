#!/bin/bash

dir=$(pwd)
cd $(dirname "${BASH_SOURCE[0]}")
cp Dockerfile ..
cd ..

# Build
docker kill keefer
docker rm keefer
docker build -t keefer .

# Run
mkdir build 2>/dev/null
rm Dockerfile
docker run -d --privileged --name keefer -v "$dir/build":/home/keefer/keefer/build keefer tail -f /dev/null
cd $dir
docker ps | grep keefer
docker exec -i -t keefer keefer-generate && echo -n 'Stopping container ' && docker kill keefer
echo "***********************************************"
echo "Finished! Your application should be at build/:"
echo "***********************************************"
ls build
