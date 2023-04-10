## 一个利用React来实现的弹幕墙的简单Demo

### 有以下功能:
- 发送弹幕评论功能，将数据存储到本地实现数据持久化，用户需要在输入框输入昵称、弹幕内容、弹幕颜色、并且能正常进行非空校验。
- 弹幕管理功能，可以管理每一条弹幕，包括删除弹幕、改变弹幕速度、改变弹幕颜色等。
- 弹幕墙功能，以弹幕墙的形式，流式的在页面随机高度滚动每一条弹幕,鼠标hover动画暂停。
- 每个功能为一个单独的react模块,利用react-router-dom库实现路由跳转。

### 使用方法
1. clone本仓库到本地。
2. 仓库根目录运行`npm i`
3. `npm start`