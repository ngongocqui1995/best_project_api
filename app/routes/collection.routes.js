module.exports = (app) => {
    const collection = require('../controllers/collection.controller.js');

    // Lấy tất cả collection mới cập nhật giới hạn số lượng
    app.post('/v1/collection/image', collection.findAllCollectionLimit);

    // Lấy tất cả collection mới cập nhật giới hạn số lượng
    app.post('/v1/collection/imageUpdate', collection.findAllCollectionUpdateLimit);

}