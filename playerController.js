// playerController.js
// Import Player model
Player = require('./playerModel');
// Handle index actions
exports.index = function (req, res) {
    Player.get(function (err, players) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "players retrieved successfully",
            data: players
        });
    });
};
// Handle create Player actions
exports.new = function (req, res) {
    var Player = new Player();
    Player.name = req.body.name ? req.body.name : Player.name;
    Player.age = req.body.age;
    Player.dunks = req.body.dunks;
    Player.free_throws = req.body.free_throws;
// save the Player and check for errors
    Player.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New Player created!',
            data: Player
        });
    });
};
// Handle view Player info
exports.view = function (req, res) {
    Player.findById(req.params.player_id, function (err, Player) {
        if (err)
            res.send(err);
        res.json({
            message: 'Player details loading..',
            data: Player
        });
    });
};
// Handle update Player info
exports.update = function (req, res) {
Player.findById(req.params.player_id, function (err, Player) {
        if (err)
            res.send(err);
Player.name = req.body.name ? req.body.name : Player.name;
        Player.age = req.body.age;
        Player.dunks = req.body.dunks;
        Player.free_throws = req.body.free_throws;
// save the Player and check for errors
        Player.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Player Info updated',
                data: Player
            });
        });
    });
};
// Handle delete Player
exports.delete = function (req, res) {
    Player.remove({
        _id: req.params.player_id
    }, function (err, Player) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Player deleted'
        });
    });
};