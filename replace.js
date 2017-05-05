const fs = require('fs')
const replace = require('replace-in-file');


const file = fs
      .readFileSync('replace.txt')
      .toString()
      .split('\n')

// const path = '/Users/juniorboaventura/.atom/packages/apple-wwdc-2016-syntax/';
const path = './';

file.forEach((line, index) => {
  const data = line.split('=>')
  const old = (data[0]) ? data[0].split(',') : null
  const toReplace = (data[1]) ? data[1].split(',') : null

  if (old && toReplace) {


    for (var i = 0; i < old.length; i++) {
      // console.log(old[i].trim());
      // console.log(toReplace[i].trim());
      // console.log('---');
      const options = {
        files: [
          path + 'styles/*.less',
          path + 'styles/languages/*.less'
        ],
        from:   RegExp(old[i].trim()),
        to: toReplace[i].trim(),
        encoding: 'utf8',
      }

      replace(options).then(file => {
        console.log(file, options);
        console.log('---------');
      })


    }

  }

})
