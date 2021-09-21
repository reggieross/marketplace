echo "Starting UI BUILD"

getChangedFiles() {
  git diff --name-only --diff-filter=AMDRT --cached | grep -q ui
}

hasUIChanged() {
  getChangedFiles | grep -q ui
}

hasBFFChanged() {
  getChangedFiles | grep -q bff
}

buildUI=hasUIChanged
buildBFF=hasBFFChanged

if [ $buildUI ]
then
  echo "start expensive operation"
fi

if [ $buildUI ]
then
  echo "start expensive operation"
fi