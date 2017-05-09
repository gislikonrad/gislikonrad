FROM nginx:latest
ARG GIT_COMMIT=unknown
LABEL git-commit=$GIT_COMMIT
EXPOSE 80
COPY dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
