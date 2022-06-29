var mongoose = require('mongoose')
var Schema = mongoose.Schema

var WheelBikeSchema = new Schema({
        size: {type: Number, require: true, unique: true},
        available: {type: Boolean, require: true, default: true}
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('bikes_wheel_diameters', WheelBikeSchema);
