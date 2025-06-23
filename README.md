# 赫哲族数字博物馆

这是一个基于 Vue 3 + Vite 构建的赫哲族数字博物馆项目。

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 自动部署到 GitHub Pages

本项目已配置 GitHub Actions 自动部署功能。当代码推送到 `main` 分支时，会自动构建并部署到 GitHub Pages。

### 设置步骤：

1. 在 GitHub 仓库中，进入 **Settings** > **Pages**
2. 在 **Source** 部分，选择 **GitHub Actions**
3. 推送代码到 `main` 分支，GitHub Actions 会自动开始构建和部署

### 注意事项：

- 确保仓库名称与 `vite.config.js` 中的 `base` 配置匹配
- 如果仓库名称不是 "新建文件夹"，请修改 `vite.config.js` 中的 base 路径
- 首次部署可能需要几分钟时间

## 项目结构

```
├── .github/workflows/    # GitHub Actions 工作流
├── Assets/              # 静态资源
├── src/                 # 源代码
│   ├── views/          # 页面组件
│   ├── App.vue         # 根组件
│   ├── main.js         # 入口文件
│   └── style.css       # 样式文件
├── index.html          # HTML 模板
├── package.json        # 项目配置
└── vite.config.js      # Vite 配置
```

## 技术栈

- Vue 3
- Vite
- Vue Router
- Leaflet (地图功能)