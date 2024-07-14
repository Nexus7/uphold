#!/bin/bash

# Check if an address is provided as an argument
if [ -z "$1" ]; then
  echo "Usage: $0 <account address>"
  exit 1
fi

# Run the binary with the provided argument
uphold check-balance alephium "$1"