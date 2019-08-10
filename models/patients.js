module.exports = (sequelize, type) => {
    return sequelize.define('patient', {
        pt_uuid: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        pt_name: type.STRING,
        pt_email: type.STRING,
        pt_cell: type.STRING,
        pt_gender: type.STRING,
        pt_dob: type.DATETIME
    })
}