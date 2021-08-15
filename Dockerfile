FROM node:12.16-alpine
ADD . /app
WORKDIR /app
EXPOSE 7001
CMD ["npm", "start"]
