const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Product Category Schema
const ProductCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: Date,
    deleted_at: Date
});

// Product Inventory Schema
const ProductInventorySchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: Date,
    deleted_at: Date
});

// Discount Schema
const DiscountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: String,
    discount_percent: {
        type: Number,
        required: true
    },
    active: Boolean,
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: Date,
    deleted_at: Date
});

// Product Schema
const ProductSchema = new Schema({
    id: Number,
    name: String,
    desc: String,
    SKU: String,
    category_id: { type: Number, ref: 'ProductCategory', required: true }, // Make category_id required
    inventory_id: { type: Number, ref: 'ProductInventory' },
    price: Number,
    discount_id: { type: Number, ref: 'Discount' },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: Date,
    deleted_at: Date
});


//Validation function for validating category
ProductSchema.path('category_id').validate(async function(value) {
    const category = await mongoose.model('ProductCategory').findOne({ _id: value });
    return !!category; // Returns true if category exists, false otherwise
}, 'Invalid category ID');


// Export the models
const ProductCategoryModel = mongoose.model('ProductCategory', ProductCategorySchema);
const ProductInventoryModel = mongoose.model('ProductInventory', ProductInventorySchema);
const DiscountModel = mongoose.model('Discount', DiscountSchema);
const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = {
    ProductCategoryModel,
    ProductInventoryModel,
    DiscountModel,
    ProductModel
};
