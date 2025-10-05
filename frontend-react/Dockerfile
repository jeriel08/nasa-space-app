FROM node:20-slim as build

WORKDIR /frontend-react

# Install dependencies and build
COPY frontend-react/package.json frontend-react/package-lock.json ./
RUN npm ci

COPY frontend-react ./
RUN npm run build

# Serve with a lightweight web server
FROM nginx:alpine
COPY --from=build /frontend-react/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
