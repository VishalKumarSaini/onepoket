import fs from 'fs';

fs.readFile('/home/nineleaps/Node/onepoket/src/task3/data.txt', //Replace the file path
    'utf8', (err, data) => {

        if (err) {
            console.log('Error while reading the file: ', err);

        } else {
            let words = data.trim().split(/\s+/); // split on ' ' and '\n'
            console.log(`Total word's count: `, words.length);
        }
    });
