const mongoose = require('mongoose')

const UserSwapmeet = new mongoose.Schema(
    {
        postingTitle: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
    }
)

const model = mongoose.model('Userpost', UserSwapmeet)

module.exports = model