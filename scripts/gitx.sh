#!/usr/bin/env bash
set -e

NAME=$1
DESC=$2

if [ -z "$NAME" ]; then
  echo "Usage: gitx <project-name> [description]"
  exit 1
fi

node dist/index.js "$NAME" "$DESC"
