module.exports = (sequelize, type) => {
    return sequelize.define('provider', {
        provider_uuid: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        provider_name: type.STRING,
        provider_email: type.STRING,
        provider_speciality: type.STRING
    })
}