const RecruiterModel = require('../models/Recruiter');
const { DB: { COLLECTIONS : { RECRUITER } } } = require('../../helpers/constants');

module.exports = {
  addRecruiter: data => require('./templates/create')(RecruiterModel, RECRUITER, data),
  getRecruiter: (findFields = {}, sortFields = null, limitNo = null) =>
    require('./templates/read')(RecruiterModel, RECRUITER, findFields, sortFields, limitNo),
  updateRecruiter: (findField, setField) => require('./templates/update')(RecruiterModel, RECRUITER, findField, setField),
  deleteRecruiter: findField => require('./templates/delete')(RecruiterModel, RECRUITER, findField)
};
