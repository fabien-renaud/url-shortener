#!/bin/bash

version=$1

echo "Bumping package*.json to version $version"
sed -Ei '1,/"version": ".*",$/{s/"version": ".*",$/"version": "'$version'",/}' package.json
sed -Ei '1,/"version": ".*",$/{s/"version": ".*",$/"version": "'$version'",/}' package-lock.json