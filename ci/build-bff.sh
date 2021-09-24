echo "Starting UI BUILD"

getChangedFiles() {
  git diff --name-only --diff-filter=AMDRT --cached
}

hasBFFChanged() {
  getChangedFiles | grep -q bff
}

haveSharedFilesChanged() {
  getChangedFiles | grep -q shared
}

buildBFF=hasBFFChanged

if [ $buildBFF ]
then
  cd ./bff || exit
  npm run build
fi