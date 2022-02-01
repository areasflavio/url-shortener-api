# URLshorten-API

<p align="center">
  <img alt="URLshorten" src=".github/logo.svg" width="25%">
</p>

<h2 align="center">
  A url shortener API  build with Node.JS, Express, MongoDB and Typescript.
</h2>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/areasflavio/url-shortener.svg">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/areasflavio/url-shortener.svg">
  
  <a href="https://github.com/areasflavio/url-shortener/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/areasflavio/url-shortener.svg">
  </a>
</p>

<p align="center">
  <a href="#computer-API-Reference">API Reference</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#keyboard-technologies">Technologies</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#computer_mouse-installation">Installation</a>
</p>

<p align="center">
  Checkout the <a href="https://areasflavio-url-shortener.herokuapp.com">API Live version</a>
   hosted on:
</p>
<p align="center">
    <img alt="Heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/>
</p>

<p align="center">
  You also can check the complete <a href="https://url-shortener-web-liard.vercel.app">Application Live version</a>
  hosted on:
</p>
<p align="center">
    <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
</p>

# :computer: API-Reference

[(Back to top)](#URLshorten-API)

### Get welcome message

```http
  GET /
```

### Get the 5 Latest Shortened URLs

```http
  GET /latestURLs
```

### Get the hash related page

```http
  GET /:hash
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `hash`    | `string` | **Required**. Hash of url to fetch |

### Create a new shorten url

```http
  POST /shortener
```

| Body        | Type     | Description                            |
| :---------- | :------- | :------------------------------------- |
| `originURL` | `string` | **Required**. Origin of url to shorten |

### Update a existing shorten url

```http
  PUT /update
```

| Body        | Type     | Description                                     |
| :---------- | :------- | :---------------------------------------------- |
| `originURL` | `string` | **Required**. New origin of url to shorten      |
| `shortURL`  | `string` | **Required**. Existing shorten of url to update |

<br/>

# :keyboard: Technologies

[(Back to top)](#URLshorten-API)

This is what i used and learned with this project:

- [x] Node.JS
- [x] Express
- [x] MongoDB
- [x] Mongoose
- [x] shortid
- [x] Typescript

<br/>

# :computer_mouse: Installation

[(Back to top)](#URLshorten-API)

To use this project, first you need NodeJS and MongoDB running in your device, then you can follow the commands below:

```bash
# Clone this repository
$ git clone https://github.com/areasflavio/url-shortener.git

# Go into the repository
$ cd url-shortener

# Install dependencies for the backend
$ yarn install

# Copy the .env.example to the .env file and inject your credentials
$ cp .env.example .env

# To start the express development server, run the following
$ yarn dev:server
```

# :man_technologist: Author

[(Back to top)](#URLshorten-API)

Build by Flávio Arêas 👋 [Get in touch!](https://www.linkedin.com/in/areasflavio/)
