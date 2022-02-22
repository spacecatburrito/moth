# Slightly Modified Hardhat Project

## Paragraph below is a direct quote from the original document

Don't pay too much attention to it, there's not much
useful stuff there, but a couple of commands may prove to be of use

`
 This project demonstrates a basic Hardhat use case. It comes with a sample
 contract, a test for that contract, a sample script that deploys that contract,
 and an example of a task implementation, which simply lists the available
 accounts


Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

- Install and run ipfs daemon

`ipfs daemon`
`

## Now For Some Useful Stuff

1. First of all, install `Node` (I know, it sucks ass)
   and also install npm
2. Open VSCode, then go to `File -> Open Folder` and pick the folder with this project
3. After that, open terminal (`Ctrl`-"~")
4. In terminal, type `npm install` to install dependencies
5. Then, still in terminal, type `npx hardhat node`, it'll give you a list of fake wallets full of fake money
6. Now, open another instance of terminal and type there `npx hardhat run scripts/deploy-script.js --network localhost`
   (yes, I know, **LOCALHOST**; there's a method to this madness -- it'll give you an address you )