const fs = require('fs')
const replace = require('replace-in-file');


const file = fs
      .readFileSync('replace.txt')
      .toString()
      .split('\n')

file.forEach((line, index) => {
  const data = line.split('=>')
  console.log(index);
  console.log(typeof data[0])
  const old = (data[0]) ? data[0].split(',') : null
  const toReplace = (data[1]) ? data[1].split(',') : null

  if (old && toReplace) {


    for (var i = 0; i < old.length; i++) {
      console.log(old[i]);
      console.log(toReplace[i]);
      console.log('----------');
      const options = {
        // files: '/Users/juniorboaventura/.atom/packages/apple-wwdc-2016-syntax/styles/*.less',
        // files: '/Users/juniorboaventura/.atom/packages/apple-wwdc-2016-syntax/styles/languages/*.less',
        files: './styles/*.less',
        files: './styles/languages/*.less',
        from:   old[i].trim(),
        to: toReplace[i].trim(),
        encoding: 'utf8',
      }
      replace(options).then(changedFiles => {
        console.log('Modified files:', changedFiles.join(', '));
      }).catch(error => {
        console.error('Error occurred:', error);
      });
    }

  }

})
