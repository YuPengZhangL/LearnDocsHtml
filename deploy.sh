# 确保脚本抛出遇到的错误
set -e

# 下载依赖
npm install

# 测试运行
npm run dev 

# 生成静态文件
npm run build

# 进入生成的html文件夹
cd docs/.vuepress/dist




