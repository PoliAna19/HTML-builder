const path = require('path');
const fs = require('fs');
const dirStyle = path.join(__dirname, 'styles');
fs.writeFile(
  path.join(__dirname, 'project-dist', 'bundle.css'),
  ' ',
  (error) => {
    if (error) throw error;
  });

fs.readdir(
  dirStyle,
  {
    withFileTypes: true,
  },
  (error, files) => {
    if (error) {
      console.log(error);
    } else {
      files.forEach((file) => {
        if (path.extname(path.join(dirStyle, `${file.name}`)) == '.css') {
          fs.readFile(
            path.join(dirStyle, `${file.name}`),
            'utf-8',
            function (error, data) {
              fs.appendFile(
                path.join(__dirname, 'project-dist', 'bundle.css'),
                data,
                (error) => {
                  if (error) console.log(error);
                },
              );
            },
          );
        }
      });
    }
  },
);