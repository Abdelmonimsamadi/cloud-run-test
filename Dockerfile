FROM node:latest
WORKDIR /app
COPY . /app
RUN npm ci
EXPOSE 8000
CMD ["npm","start"]
