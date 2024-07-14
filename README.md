# Uphold - Coding Assignment

## Setup

1. Clone this repo to your local machine
2. Install all packages required by running:

```
npm i
```
3. Build the project:

```
npm run build
```

4. Install the package as a global CLI tool:

```
npm i -g
```

5. Test that the CLI tool is available from another directory:

```
cd ..
uphold -V
```


## Usage

### 1. Checking blockchain balances using the bash script
<br/>

Use the command:

```
./check-alephium-balance.sh <address>
```

Example of checking balance of account 19WzSnmNC1SQ6v7RpFFXhpcMcFSiwM4nKTSdbwgSJfSHy on the Alephium blockchain:

```
./check-alephium-balance.sh  19WzSnmNC1SQ6v7RpFFXhpcMcFSiwM4nKTSdbwgSJfSHy
```