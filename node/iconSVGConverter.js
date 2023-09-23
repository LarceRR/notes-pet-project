const fs = require('fs')
const { json } = require('react-router-dom')
var path = require('path')

console.log(path.resolve("Relative file"));

fs.readdir('./icons', (err, files) => {

    const icons = files
    const licenseText = '<!-- Font Awesome Pro 6.0.0-alpha2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->'
    let iconsJson = {
        icons: []
    }

    if (!fs.existsSync('changedIcons')) {
        fs.mkdir('changedIcons', err => {
            if (err) console.log(err);
        })
        fs.writeFile('changedIcons/test.svg', 'test', err => {console.log(err)})
        for (let i = 0; i < icons.length; i++) {
            fs.readFile(`./icons/${icons[i]}`, 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    fs.writeFile(`./changedIcons/${icons[i]}`, data.replace(licenseText,"").replace('<path', '<path fill="#000000"'), err => {
                        if (err) {
                            console.log(err);
                        } else console.log(icons[i] + ' успешно записан');
                    })
                    iconsJson.icons.push({iconName: icons[i], svg: data.replace(licenseText,"").replace('<path', '<path fill="#000000"')})
                    fs.writeFile('icons.json', JSON.stringify(iconsJson, null, 3), 'utf-8', err => {
                        if (err) {
                            console.log(err);
                        } else console.log('jsonIcons updated with new line ' + icons[i]);
                    })
                }
            })
        }
    }
})