const getProfessional = async (req, res, next) => {
    var jsonFile = require('../data.json')

    jsonFile.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
      });

  };
  
  module.exports = { getProfessional };