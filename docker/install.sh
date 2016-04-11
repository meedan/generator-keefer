#!/bin/bash
# Install the right Node.js and set it as the default
curl https://raw.githubusercontent.com/creationix/nvm/${NVM_VERSION}/install.sh | sh
source ~/.nvm/nvm.sh
nvm install $NODE_VERSION
nvm use --delete-prefix $NODE_VERSION
nvm alias default $NODE_VERSION
nvm current
