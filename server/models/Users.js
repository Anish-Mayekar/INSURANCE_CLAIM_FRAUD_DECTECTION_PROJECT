const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    claim_id: Number,
    policy_id: String,
    customer_id: String,
    claim_amount: Number,
    claim_date: String,
    claim_type: String,
    claim_status: String,
    city: String,
    state: String,
    country: String,
    investigator_id: String,
    investigation_status: String,
    investigation_notes: String,
    // is_fraudulent: Boolean,
    fraud_reason: String
})

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel