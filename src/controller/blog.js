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
    },
    {
      id: 3,
      title: '新嫁娘词',
      content: '白三日入厨下，洗手作羹汤。未谙姑食性，先遣小姑尝。',
      createTime: 1598967923939,
      author: '王建'
    },
    {
      id: 4,
      title: '相思',
      content: '红豆生南国，春来发几枝。愿君多采撷，此物最相思。。',
      createTime: 1598964604902,
      author: '王维'
    },
    {
      id: 5,
      title: '杂诗',
      content: '君自故乡来，应知故乡事。来日绮窗前，寒梅著花未？',
      createTime: 1598967910447,
      author: '王维'
    }
  ]
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

module.exports = {
  getList,
  getDetail
}