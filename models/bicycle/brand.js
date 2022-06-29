var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BrandBikeSchema = new Schema({
        name: {type: String, require: true, unique: true, minLength: 3}
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('bike_brands', BrandBikeSchema);
