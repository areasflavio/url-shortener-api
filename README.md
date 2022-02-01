<p align="center">
  <img alt="URLshorten" src=".github/logo.svg" width="25%">
</p>

<p align="center">
  A url shortener API  build with Node.JS, Express, MongoDB and Typescript.
</p>

<p align="center">
  Checkout the <a href="https://areasflavio-url-shortener.herokuapp.com">Live version</a>
</p>

<br/>

## 💻 API Reference

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

## ⌨️ Tech

This is what i used and learned with this project:

- [x] Node.JS
- [x] Express
- [x] MongoDB
- [x] shortid
- [x] Typescript

<br/>

## 👨🏻‍💻 Author

Build by Flávio Arêas 👋 [Get in touch!](https://www.linkedin.com/in/areasflavio/)
