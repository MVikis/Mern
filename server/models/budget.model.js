const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  username: { type: String, required: true },
  income: { type: Number, required: true },
  expenses: { type: Number, required: true },
  percentage: {type: Number, required: false}
}, {
  timestamps: true,
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;