const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const RecruiterSchema = new Schema({
  fullName: String,
  companyId: Schema.ObjectId,
  jobsPosted: [Schema.ObjectId], // Ids of jobs model
  telegramChatId: Number
});

RecruiterSchema.plugin(timestamp);

module.exports = Recruiter = mongoose.model('recruiter', RecruiterSchema);
