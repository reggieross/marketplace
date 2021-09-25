echo "Checking for changed files"
# latest commit
LATEST_COMMIT=$(git rev-parse HEAD)

# latest commit where bff was changed
BFF_CHANGE_COMMIT=$(git log -1 --format=format:%H --full-diff bff)

# latest commit ui was changed
UI_CHANGE_COMMIT=$(git log -1 --format=format:%H --full-diff ui)

# latest commit ui was changed
SHARED_CHANGE_COMMIT=$(git log -1 --format=format:%H --full-diff shared)

# shellcheck disable=SC2086
if [[ $LATEST_COMMIT = "$SHARED_CHANGE_COMMIT"  || ( $BFF_CHANGE_COMMIT = "$LATEST_COMMIT"  &&  $UI_CHANGE_COMMIT = "$LATEST_COMMIT")  ]]
then
  echo "The fire nation attacked"
  echo "export BUILD_ALL=true" >> ./ci/new-env-vars
  exit 0
fi

if [ "$BFF_CHANGE_COMMIT" = "$LATEST_COMMIT" ]
then
  echo "The BFF Changed"
  echo "export BUILD_BFF=true" >> ./ci/new-env-vars
elif [ "$UI_CHANGE_COMMIT" = "$LATEST_COMMIT" ]
then
  echo "The UI Changed"
  echo "export BUILD_UI=true" >> ./ci/new-env-vars
fi



