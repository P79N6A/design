#!/bin/sh

BASE_DIR=`pwd`
BUILD_DIR=$BASE_DIR/build

echo "Pack all html into a package."
echo "------------------------"

if [ ! -d "$BUILD_DIR" ]; then
  mkdir $BUILD_DIR
fi

cd $BUILD_DIR
zip -o -m $BASE_DIR/alibaba-fusion-design.zip *.html */*.html

echo "Push zip to server."
echo "------------------------"

scp $BASE_DIR/alibaba-fusion-design.zip admin@47.75.26.71:/home/admin/site
