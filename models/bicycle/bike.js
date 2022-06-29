var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BycicleSchema = new Schema({
        name: {type: String, require: true, unique: true, minLength: 5},
        ref: {type: String, require: true, unique: true, minLength: 5},
        brand: {type: Schema.Types.ObjectId, ref: 'brand'},
        bike_size: {type: Schema.Types.ObjectId, ref: 'bike_sizes'},
        bike_wheel_diameter: {type: Schema.Types.ObjectId, ref: 'bikes_wheel_diameters'},
        quantity: {type: Number, require: true, min: 0, default: 0},
        weight: {type: Number, require: true, min: 0, default: 1},
        price: {type: Number, require: true, min: 180, default: 180},
        available: {type: Boolean, require: true, default: true},
        breakdown: {type: Boolean, require: true, default: false},
        color: [{
            type: Schema.Types.ObjectId,
            ref: 'bike_colors'
        }],
        type: {type: Schema.Types.ObjectId, require: true, ref: 'bike_types'},
        gender: [{
            type: Schema.Types.ObjectId,
            ref: 'bike_user_genders'
        }],

    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('bycicles', BycicleSchema);
