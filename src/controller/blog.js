const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`

  // 返回 promise
  return exec(sql)
}

const getDetail = (id) => {
  // 先返回假数据
  return {
    id: 1,
    title: '行宫',
    content: '寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。',
    createTime: 1546610491112,
    author: '元稹'
  }
}

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title content 属性

  return {
    id: 3 // 表示新建博客，插入到数据表里面到 id
  }
}

const updateBlog = (id, blogData = {}) => {
  // id 就是要更新博客的 id
  // blogData 是一个博客对象，包含 title content 属性

  return true
}

const delBlog = (id) => {
  // id 就是要删除的博客 id

  return true
}



module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}