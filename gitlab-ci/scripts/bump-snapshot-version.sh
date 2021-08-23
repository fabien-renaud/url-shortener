#!/bin/bash

dirname=$(dirname $0)

# Increment MAJOR, MINOR or PATCH version. Default is MINOR
increment=$(if [[ $1 == "MAJOR" || $1 == "MINOR" || $1 == "PATCH" ]]; then echo $1; else echo "MINOR"; fi)

# Get version from package.json
version=$(sh $dirname/get-version.sh)
# Get release version (without -SNAPSHOT)
releaseVersion=$(sh $dirname/get-release-version.sh)
# Print version | Increment version | Add -SNAPSHOT
nextVersion=$(echo $releaseVersion | awk -F'.' '{MAJOR=$1;MINOR=$2;PATCH=$3;'$increment' += 1;printf( "%d.%d.%d-SNAPSHOT", MAJOR, MINOR, PATCH );}')

echo "Current version is $version"
echo "Bumping to version $increment$snapshot"

$dirname/bump-version.sh $nextVersion