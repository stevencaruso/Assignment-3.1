// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Hello World',
    });
});
// Import Player controller
var playerController = require('./playerController');
// Player routes
router.route('/players')
    .get(playerController.index)
    .post(playerController.new);
router.route('/players/:player_id')
    .get(playerController.view)
    .patch(playerController.update)
    .put(playerController.update)
    .delete(playerController.delete);
// Export API routes
module.exports = router;