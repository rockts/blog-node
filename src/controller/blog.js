const getList = (author, keyword) => {
  // 先返回假数据 （格式是正确的）
  return [
    {
      id: 1,
      title: '行宫',
      content: '寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。',
      createTime: 1546610491112,
      author: '元稹'
    },
    {
      id: 2,
      title: '登鹳雀楼',
      content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
      createTime: 1598964604902,
      author: '王之涣'
    }
  ]
}

module.exports = {
  getList
}