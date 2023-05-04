# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

cp -ra ./* F:/work/游戏项目/运维OP系统/opsite/op-API/dist
cd /f/work/游戏项目/运维OP系统/opsite/

# git add op-API/dist/*

# git commit -m "提交op系统api接口文档dist目录-dengruquan-`date`"
# git push

