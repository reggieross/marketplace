
if [ "$BUILD_UI" = "true" ]
then
echo "Starting UI build"
cd ./ui || exit
npm run build
else
echo "No UI build needed"
fi

