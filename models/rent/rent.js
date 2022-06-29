var mongoose = require('mongoose')
var Schema = mongoose.Schema

var RentSchema = new Schema({
        user: {type: String, require: true},
        start_date_reservation: {type: Schema.Types.Date, require: true},
        start_time: {type: Number, require: true, min: 0, max: 24},
        end_date_reservation: {type: Schema.Types.Date, require: true},
        end_time: {type: Number, require: true, min: 0, max: 24},
        bicycle: {type: Schema.Types.ObjectId, ref: 'bicycle'},
        status: {type: String, require: true, enu: ['pending', 'in progress', 'confirmed', 'blocked']}
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('rent', RentSchema);
