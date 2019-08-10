module.exports = (sequelize, type) => {
    return sequelize.define('drug', {
        drug_uuid: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        drug_name: type.STRING,
        condition_name: type.STRING,
        icd_10: type.STRING
    })
}