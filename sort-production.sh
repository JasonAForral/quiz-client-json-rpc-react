#!/bin/sh

docker-compose run web npm run build
rm -rf production
rm -rf assets
sudo chown -R $USER:$USER build
mkdir production
cp build/index.html production/index.html
cp -R build assets
rm -rf assets/index.html
