const fabric = require("fabric").fabric;
const fs = require('fs');
const path = require('path');
let textStringUsed = '啊';
fabric.nodeCanvas.registerFont(path.resolve(process.cwd(), `assets/fonts/804d99ffec4649489c5fd443848f6d06.ttf`), {
    family: '804d99ffec4649489c5fd443848f6d06',
    weight: 'regular',
    style: 'normal'
});
var textFabric = new fabric.Text(textStringUsed, {
    left: 0,
    top: 0,
    fill: 'red',
    angle: 0,
    fontSize: 160,
    fontFamily: '804d99ffec4649489c5fd443848f6d06'
});

// console.log(textFabric.width, textFabric.height)
var canvas = new fabric.StaticCanvas(null, { width: textFabric.width, height: textFabric.height });
canvas.add(textFabric);
console.log("textJSON", JSON.stringify(textFabric))
canvas.renderAll();
const imgBase64 = canvas.toDataURL({
    format: "image/png",
    left: 0,
    top: 0,
    width: textFabric.width,
    height: textFabric.height
})
saveImgToLoacal(imgBase64, 'test.png')

function saveImgToLoacal(base64, fileName) {
    return new Promise((resolve, reject) => {
        base64 = base64.replace(/^data:image\/\w+;base64,/, "")
        const dataBuffer = Buffer.from(base64, 'base64')
        fs.writeFile(path.resolve(process.cwd(), `temps/${fileName}`), dataBuffer, (err) => {
            if (err) {
                console.log(err)
                reject(err)
            } else { resolve() }
        })
    })
}

function registFontFamily() {

    try {
        fabric.nodeCanvas.registerFont(path.resolve(process.cwd(), `assets/fonts/998d0c73eefa43589b9b064d8a82aef1.ttf`), {
            family: '998d0c73eefa43589b9b064d8a82aef1',
            weight: 'regular',
            style: 'normal'
        });
    } catch (e) {
        console.log(e)
    }
}