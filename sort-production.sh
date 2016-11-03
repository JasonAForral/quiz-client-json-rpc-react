# !/bin/sh

docker-compose run web npm run build
sudo chown -R $USER:$USER .
rm -rf production
rm -rf assets
mkdir production
cp build/index.html production/index.html
cp -R build assets
rm -rf assets/index.html
cd ..
sh prepare-production.sh
cd client
