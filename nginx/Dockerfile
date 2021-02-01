
FROM nginx:1.15.8

RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/
COPY /build /etc/nginx/build/
RUN rm /etc/nginx/conf.d/default.conf
COPY project.conf /etc/nginx/conf.d/