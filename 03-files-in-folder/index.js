const path = require('path');
const fs = require('fs/promises');


const pathFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathFolder, { withFileTypes: true })
  .then((dirents) => {
    dirents.forEach((dirent) => {
      if (dirent.isFile()) {
        const pathFile = path.join(pathFolder, dirent.name);
        fs.stat(pathFile)
          .then((stats) => {
            const nameOfFile = path.parse(dirent.name).name;
            const extensionOfFile = path.extname(dirent.name).slice(1);
            const sizeOfFile = stats.size;
            console.log(`${nameOfFile}-${extensionOfFile}-${sizeOfFile} bytes`);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });