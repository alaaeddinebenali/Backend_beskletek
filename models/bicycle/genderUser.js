var mongoose = require('mongoose')
var Schema = mongoose.Schema

var GenderUsersSchema = new Schema({
        name: {type: String, require: true, unique: true},
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('bike_user_genders', GenderUsersSchema);
