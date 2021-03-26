#!/bin/bash

RSYNCB_linux="rsync -cEhimprt --delete-after --ignore-errors"
RSYNCB_linux_KL="$RSYNCB_linux --delete-excluded -l"

PROJECT_NAME="webpack-demo"
TARGET_DIR="/home/adr/apps/opt/apache-htdocs/$PROJECT_NAME"

mkdir -p $TARGET_DIR

RSYNC_CMD="$RSYNCB_linux_KL" $HOME/x.sh basicRaid ./dist/ $TARGET_DIR "--exclude=.git --exclude=.gitignore"
