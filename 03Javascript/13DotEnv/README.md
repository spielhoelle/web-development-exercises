# Dotenv and Webpack 

## 1. Why?

If you use API keys (for example for the Google Maps API) in your code, you should not push those keys to a git repository. This can be a security issue, especially if your repository is public.

## 2. How?

### 2.1 Install the Dotenv plugin

Install the [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack) plugin into your project.

```bash
npm install --save-dev dotenv-webpack
```

### 2.2 Update the Webpack configuration

Require the plugin at the beginning of your `webpack.config.js`.

```javascript
const Dotenv = require("dotenv-webpack");
```

Load the plugin in your configuration.

```javascript
module.exports = {
  ...
  plugins: [
    new Dotenv({
      path: "./.env",
      safe: "./.env.default"
    }),
  ]
  ...
};
```

### 2.3 Create .env files

Create a file `.env` in the root directory of your project (where your webpack.config.js is).

Set variables, using the constant syntax:

```
# GOOGLE APIs

GOOGLE_MAPS_API_KEY=vEVmihkWZ2fqedyHQTGCyCc1qu4uaZoYPkOMPMyU
YOUTUBE_API_KEY=TnJ8u0bYOfVuL9bbFH83T13N05I2XOX2LCJLur8L

# OTHER APIs
XKCD_API_KEY=fQiAqh3hEzZthb698zMcijCb2xguZZzRTjKHcaGl
```

Create a copy of that file and name it `.env.default`. The default file will be used to check automatically if you have all the needed values set in the `.env` when you create that later.

The [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack) plugin is really great, because it will only include variables in your code, that are used there. All variables that you define in the `.env` but that are never used in the files you load with Webpack, will not be included in your bundles.

### 2.4 Use the environment variables

To access the variables you defined, you use the `process.env` object in your JavaScript files.

Example:

```javascript
console.log(process.env.GOOGLE_MAPS_API_KEY);
console.log(process.env.YOUTUBE_API_KEY);
```
