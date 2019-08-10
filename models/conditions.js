module.exports = (sequelize, type) => {
    return sequelize.define('condition', {
        icd_10: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        condition_name: type.STRING
    })
}