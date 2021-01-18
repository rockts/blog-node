const fs = require('fs')
const path = require('path')

// 写日志
function writeLog(writeStream, log) {
  writeStream.write(log + '\n') // 关键代码
}

// 生成 wirte Stream
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName)
  const writeStream = fs.createWriteStream(fullFileName, {
    flags: 'a'
  })
  return writeStream
}

const accessWriteStrea = createWriteStream('access.log')
function access(log) {
  writeLog(accessWriteStrea, log)
}

module.exports = {
  access
}
