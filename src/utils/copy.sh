#!/bin/sh
cd /Users/rockts/desktop/blog-node/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log