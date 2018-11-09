const Stories = require('../models/storypicture.model.js');




exports.findStoryUpdatedAtLimit = (req, res) => {
    let limit = Number(req.body.limit)
    let projection = req.body.projection
    let indexPage = Number(req.body.indexPage)
    let index = indexPage === 1 ? 0 : Number(limit*indexPage - limit)

    if(!isNaN(limit) && !isNaN(indexPage)){
        Stories.find({}, projection).limit(limit).skip(index)
        .then(result => {
            res.send(result)
        }).catch(err => {
            console.log(err)
            res.send([])
        })
    }else{
        res.send([])
    }
};

exports.findStoryCategoryLimit = (req, res) => {
    let limit = Number(req.body.limit)
    let category = req.body.category
    let projection = req.body.projection
    let indexPage = Number(req.body.indexPage)
    let index = indexPage === 1 ? 0 : Number(limit*indexPage - limit)

    if(!isNaN(limit) && !isNaN(indexPage)){
        Stories.find({"category.key": category}, projection).limit(limit).skip(index)
        .then(result => {
            res.send(result)
        }).catch(err => {
            console.log(err)
            res.send([])
        })
    }else{
        res.send([])
    }
};

exports.findPaginationStoryCategoryLimit = (req, res) => {
    let limit = Number(req.body.limit)
    let category = req.body.category
    let projection = req.body.projection

    if(!isNaN(limit)){
        Stories.find({"category.key": category}, projection).count()
        .then(result => {
            let page = Math.ceil(result/limit)
            res.send({page: page})
        }).catch(err => {
            console.log(err)
            res.send({page: 0})
        })
    }else{
        res.send([])
    }
};

exports.connect = (req, res) => {
    res.send({message: "ok"})
};