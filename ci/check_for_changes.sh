echo "Checking for changed files"

hasUIChanged() {
  git diff --name-only --diff-filter=AMDRT --cached |  grep ^ui
}

hasBFFChanged() {
  git diff --name-only --diff-filter=AMDRT --cached |  grep ^bff
}

haveSharedFilesChanged() {
  git diff --name-only --diff-filter=AMDRT --cached |  grep ^shared
}

haveSharedFilesChanged
BUILD_ALL=$?

hasBFFChanged
BUILD_BFF=$?


hasUIChanged
BUILD_UI=$?

if [ $BUILD_ALL = 0 ]
then
  echo "The fire nation attacked"
  echo "export BUILD_ALL=$BUILD_ALL" >> ./ci/new-env-vars
  exit 0
fi

if [ $BUILD_BFF = 0 ]
then
  echo "The BFF Changed"
  echo "export BUILD_BFF=$BUILD_BFF" >> ./ci/new-env-vars
elif [ $BUILD_UI = 0 ]
then
  echo "The UI Changed"
  echo "export BUILD_UI=$BUILD_UI" >> ./ci/new-env-vars
fi



