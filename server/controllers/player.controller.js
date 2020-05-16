const { Player } = require('../models/player.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPlayer = (request, response) => {
    const { name, position } = request.body;
    Player.create({
        name,
        position
    })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllPlayer = (request, response) => {
    Player.find({})
        .then(players => response.json(players))
        .catch(err => response.json(err))
}

module.exports.getPlayer = (request, response) => {
    Player.findOne({_id:request.params.id})
        .then(player => response.json(player))
        .catch(err => response.json(err))
}

module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.json(err))
}

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
