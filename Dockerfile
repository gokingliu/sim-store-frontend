# 指定基础镜像
FROM nginx:alpine

# 复制项目 nginx 配置文件
COPY nginx/ /etc/nginx/

# 复制静态资源到指定目录
ADD dist/ /data/websites/
