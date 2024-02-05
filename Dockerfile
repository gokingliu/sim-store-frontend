# 指定基础镜像
FROM nginx:alpine

# 复制执行文件
COPY app /app/

# 复制项目 nginx 配置文件
COPY nginx/ /etc/nginx/

# 复制静态资源到指定目录
ADD dist/ /data/websites/

# 执行脚本
ENTRYPOINT ["/app/entrypoint.sh"]
