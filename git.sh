#!/bin/sh

echo "开始执行"
cd ./utils/logseqdata

echo "拉取最新分支"
git pull origin main

git add .

git commit -m "通过webDavSyncGit同步"

git push origin main

echo "同步完成"