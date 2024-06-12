FROM node:18.18.1 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
RUN ls -l /app/dist   # Add this line to check the contents of the /app/dist directory

FROM nginx:alpine
COPY --from=build /app/dist/Modernize /usr/share/nginx/html  
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
