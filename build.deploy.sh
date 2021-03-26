#!/bin/bash

npm run build

echo -e "\ndeploying ..."
./deploy.sh
