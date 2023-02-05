const bcrypt = require('bcrypt')

const hashPassword = async(password) => {
    const salt = 10
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

const comparePassword = async(password, hashedPassword) => {
    const matches = await bcrypt.compare(password, hashedPassword)
    return matches
}

module.exports = {
    hashPassword,
    comparePassword
}