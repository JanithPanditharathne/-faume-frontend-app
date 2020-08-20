FROM nginx:latest
COPY build/ /usr/share/nginx/html/
COPY packages/ui/nginx.conf /etc/nginx/conf.d/default.conf
