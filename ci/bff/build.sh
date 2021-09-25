if [ "$BUILD_ALL" = "true" ] || [ "$BUILD_BFF" = "true" ]
then
echo "Starting BFF BUILD"
cd ./bff || exit
npm run build
else
echo "No BFF build needed"
fi
