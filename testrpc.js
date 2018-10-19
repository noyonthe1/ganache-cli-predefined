/**
 * This script runs TESTRPC with a proper gas/price settings
 * and set of defined User Accounts
 */

const spawn = require('child_process').spawn;
const fs = require('fs');
const limit = process.argv[2] || 76;

let command = 'ganache-cli';
const params = [];
if (/^win/.test(process.platform)) {
  params.push('/s');
  params.push('/c');
  params.push(command);
  command = 'cmd';
}
params.push('-l');  params.push('4500000000000');
params.push('-m');  params.push("candy maple cake sugar pudding cream honey rich smooth crumble sweet treat");

//params.push('--gasLimit'); params.push(6800975);
//params.push('--gasPrice'); params.push(1000);

// const contents = fs.readFileSync(__dirname + '/_user_keys.txt', 'utf8');
// const accounts = contents.split("\n");
// for (let ai = 0; ai < accounts.length; ai++) {
//     const a = accounts[ai].trim();
//     if (!a) continue;
//     params.push('--account=0x' + a + ',1000000000000000000000');
//     if (ai >= limit) break;
// }

console.log(command, JSON.stringify(params));
const ls = spawn(command, params);

const out = (data) => { process.stdout.write(data.toString()); }
ls.stdout.on('data', out);
ls.stderr.on('data', out);
ls.on('exit', (code) => {
  console.log('child process exited with code ' + code.toString());
});
