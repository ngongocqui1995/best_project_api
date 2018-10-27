var axios = require('axios');
var jsdom = require("jsdom");

var { JSDOM } = jsdom;

exports.findAllCollectionLimit = (req, res) => {
    try{
        let data = getDataImage(req.body.data)
        let mang_moi = data.slice(0, 5)
        res.send(mang_moi)
    }catch(err){
        console.log(err)
        res.send([])
    }
}

exports.findAllCollectionUpdateLimit = (req, res) => {
    try{
        let data = getDataImage(req.body.data)
        res.send(data)
    }catch(err){
        console.log(err)
        res.send([])
    }
}

function getDataImage(data1){
    let data = []
    const dom = new JSDOM(data1)
    let divClassSuCustomGallery = dom.window.document.getElementsByClassName('su-custom-gallery su-custom-gallery-title-always')
    for(let i=0; i<divClassSuCustomGallery.length; i++){
        let tagImg = divClassSuCustomGallery[i].getElementsByTagName('img')
        for(let j=0; j<tagImg.length; j++){
            data.push({img: tagImg[j].getAttribute("src")})
        }
    }
    return data
}