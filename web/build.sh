#!/bin/sh

# Get the directory where the script is located
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
cd "$SCRIPT_DIR"

version=$(cat ../VERSION)
echo "Building version: $version"

while IFS= read -r theme; do
    echo "Building theme: $theme"
    rm -rf build/$theme
    cd "$theme"
    npm install
    DISABLE_ESLINT_PLUGIN='true' REACT_APP_VERSION=$version npm run build
    cd ..
    mkdir -p build
    mv "$theme/build" "build/$theme"
done < THEMES
