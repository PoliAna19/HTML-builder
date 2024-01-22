const fs = require('fs');
const path = require('path');

fs.stat(path.join(__dirname, 'files-copy'), (error) => {
  if (error) {
    fs.mkdir(
      path.join(__dirname, 'files-copy'),
      { recursive: true },
      (error) => {
        if (error) throw error;
      });
    copy();
  } else {
    fs.readdir(path.join(__dirname, 'files-copy'), (error, items) => {
      for (let i = 0; i < items.length; i++) {
        fs.unlink(path.join(__dirname, 'files-copy', items[i]), (error) => {
          if (error) throw error;
        });
      }
    });
    copy();
  }
});

function copy() {
  fs.readdir(path.join(__dirname, 'files'), (error, items) => {
    for (let i = 0; i < items.length; i++) {
      fs.copyFile(
        path.join(__dirname, 'files', items[i]),
        path.join(__dirname, 'files-copy', items[i]),
        (error) => {
          if (error) throw error;
        },
      );
    }
  });
}