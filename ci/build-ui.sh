echo "Starting BFF BUILD"

getChangedFiles() {
  git diff --name-only --diff-filter=AMDRT --cached | grep -q ui
}

hasUIChanged() {
  getChangedFiles | grep -q ui
}

buildUI=hasUIChanged

if [ $buildUI ]
then
  cd ./ui || exit
  npm run build
fi
