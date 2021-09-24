  cd ./bff || exit
  sh -c 'nodemon' & jobs

  cd ../ui || exit
  npm run start
