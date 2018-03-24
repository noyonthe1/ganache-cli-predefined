FROM node:9.7.1-alpine
RUN npm install -g ganache-cli
ADD testrpc.js

EXPOSE 8545

# To run a testrpc with predefined keys
CMD node ./testrpc.js