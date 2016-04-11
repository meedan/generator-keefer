#!/bin/bash
sudo npm install yo -g
sudo npm link
git config --global user.email "hello@meedan.com"
git config --global user.name "Keefer Generator"
sudo chown -R keefer /home/keefer
yo keefer
find build -name node_modules -exec rm -rf {} ";" 2>/dev/null
