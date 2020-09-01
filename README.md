## 接口设计

| 功能             | 地址             | 方法 | url 参数                    | 备注                           |
| ---------------- | ---------------- | ---- | --------------------------- | ------------------------------ |
| 获取博客列表     | /api/blog/list   | get  | author 作者，keyword 关键字 | 参数为空的话，则不进行查询过滤 |
| 获取一篇博客内容 | /api/blog/detail | get  | id                          |                                |
| 新增一篇博客     | /api/blog/new    | post |                             | post 中有新增的信息            |
| 更新一篇博客     | /api/blog/update | post | id                          | postDate 中有更新的内容        |
| 删除一篇博客     | /api/blog/del    | post | id                          |                                |
| 登录             | /api/user/login  | post |                             | postDate 中有用户名和密码      |
