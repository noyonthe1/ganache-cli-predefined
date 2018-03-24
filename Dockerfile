FROM node:9.9.0-alpine
RUN npm install -g ganache-cli

COPY *.txt *.js ./

EXPOSE 8545
# To run a testrpc with predefined keys
CMD /usr/local/bin/node ./testrpc.js
