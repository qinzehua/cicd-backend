FROM node:12.16-alpine
WORKDIR /app
ADD . /app
EXPOSE 7001
CMD ["npm", "start"]
