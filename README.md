# 接口设计

| 功能             | 地址             | 方法 | url 参数                    | 备注                           |
| ---------------- | ---------------- | ---- | --------------------------- | ------------------------------ |
| 获取博客列表     | /api/blog/list   | get  | author 作者，keyword 关键字 | 参数为空的话，则不进行查询过滤 |
| 获取一篇博客内容 | /api/blog/detail | get  | id                          |                                |
| 新增一篇博客     | /api/blog/new    | post |                             | post 中有新增的信息            |
| 更新一篇博客     | /api/blog/update | post | id                          | postDate 中有更新的内容        |
| 删除一篇博客     | /api/blog/del    | post | id                          |                                |
| 登录             | /api/user/login  | post |                             | postDate 中有用户名和密码      |

# 建表

## user

### 内容

| id  | username | passwrd | realname |
| --- | -------- | ------- | -------- |
| 1   | zhangsan | 123     | 张三     |
| 2   | lisi     | 123     | 李四     |

### 创建 users 表

| column   | datatye     | pk 主键 | nn 不为空 | AI 自动增加 | Default |
| -------- | ----------- | ------- | --------- | ----------- | ------- |
| id       | int         | y       | y         | y           |         |
| username | varchar(20) |         | y         |             |         |
| password | varchar(20) |         | y         |             |         |
| realname | varchar(20) |         | y         |             |         |

## blog

### 内容

| id  | title  | content | createtime    | author   |
| --- | ------ | ------- | ------------- | -------- |
| 1   | 标题 1 | 内容 1  | 1542512972176 | zhangsan |
| 2   | 标题 2 | 内容 2  | 1542412996662 | lisi     |

### 创建 blogs 表

| column     | datatye     | pk 主键 | nn 不为空 | AI 自动增加 | Default |
| ---------- | ----------- | ------- | --------- | ----------- | ------- |
| id         | int         | y       | y         | y           |         |
| title      | varchar(50) |         | y         |             |         |
| content    | longtext    |         | y         |             |         |
| createtime | bigint(20)  |         | y         |             | 0       |
| author     | varchar(20) |         | y         |             |         |
