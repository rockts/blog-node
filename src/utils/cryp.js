const crypto = require('crypto')

// 密匙
const SECRET_KEY = '$u0xfc8%p%=$w0de$tdqx!hi-tok65hnz$sgek88fip5z&v@rl'

// md5 加密
function md5(content) {
  let md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}

// 加密函数
function genPassword(password) {
  const str = `password=${password}&key=${SECRET_KEY}`
  return md5(str)
}

module.exports = {
  genPassword
}