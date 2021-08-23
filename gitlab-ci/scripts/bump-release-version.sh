#!/bin/bash

dirname=$(dirname $0)

# Get version from package.json
version=$(sh $dirname/get-version.sh)
# Get release version (without -SNAPSHOT)
releaseVersion=$(sh $dirname/get-release-version.sh)

echo "Current version is $version"
echo "Bumping to version $releaseVersion"

$dirname/bump-version.sh $releaseVersion