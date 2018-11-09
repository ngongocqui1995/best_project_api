module.exports = (app) => {
    const stories = require('../controllers/storypicture.controller');

    // Lấy tất cả story mới cập nhật giới hạn số lượng
    app.post('/v1/mobile/stories/limit', stories.findStoryUpdatedAtLimit);

    app.get('/v1/mobile/connect', stories.connect);

    app.post('/v1/mobile/stories/category/limit', stories.findStoryCategoryLimit);

    app.post('/v1/mobile/stories/category/limit/pagination', stories.findPaginationStoryCategoryLimit);
}