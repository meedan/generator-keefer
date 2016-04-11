# Dockerfile
FROM ubuntu
MAINTAINER Meedan(hello@meedan.com)

# Constants
ENV NVM_VERSION v0.29.0
ENV NODE_VERSION v4.3.2
ENV TERM xterm

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install Node.js
RUN apt-get update
RUN apt-get -y upgrade
RUN DEBIAN_FRONTEND=noninteractive apt-get install vim git man npm nodejs curl build-essential libssl-dev sudo -y
RUN ln -s /usr/bin/nodejs /usr/bin/node

# Add user and install
ADD ./docker/generate.sh /usr/bin/keefer-generate
RUN useradd -ms /bin/bash keefer && echo "keefer:keefer" | chpasswd && adduser keefer sudo
RUN echo 'keefer ALL=NOPASSWD: ALL' >> /etc/sudoers
ADD . /home/keefer/keefer
RUN chown -R keefer /home/keefer
USER keefer
RUN mkdir -p ~/.config/configstore && echo '{ "optOut": true }' > ~/.config/configstore/insight-yo.json
RUN cd /home/keefer/keefer && ./docker/install.sh
WORKDIR /home/keefer/keefer
