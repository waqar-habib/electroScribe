const Sequelize = require('sequelize')
const ConditionModel = require('./models/conditions')
const DrugModel = require('./models/drugs')
const PatientModel = require('./models/patients')
const ProviderModel = require('./models/providers')

const sequelize = new Sequelize('codementor', 'root', 'root', {



  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }



})


// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs
const Condition = ConditionModel(sequelize, Sequelize)
const Drug = DrugModel(sequelize, Sequelize)
const Patient = PatientModel(sequelize, Sequelize)
const Provider = ProviderModel(sequelize, Sequelize)

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Condition,
  Drug,
  Patient,
  Provider