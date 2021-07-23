## Advance CRUD API with Node JS & Express

An advanced CRUD API for Node JS implementing with MVC pattern and many more standards...

---

### Technologies &amp; Featuers:
1. MongoDB
1. Mongoose
1. Express JS
1. Node JS
1. MVC (Model-View-Controller) Pattern
1. Validation

### How to Run:

#### Install NPM
```bash
npm i
```

#### Create `.env` file by copying `.env.example`
```bash
MONGODB_DEFAULT_DB=
MONGODB_CLUSTER=
MONGODB_USERNAME=
MONGODB_PASSWORD=
```

#### Run Project
```bash
npm start
```

<br />


#### Postman API Link
<a href="https://www.getpostman.com/collections/f96bafc60eb5fa7a7784" target="_blacnk">https://www.getpostman.com/collections/f96bafc60eb5fa7a7784</a>



<div><h3>Todo List: </h3><p>Endpoint: <code>http://localhost:3000/todos</code></p><p>Method: <code>GET</code></p>
<div>Response: <br>

```js
[
  {
    "_id": "60fadbf0fb1e9926fb60c07d",
    "title": "First todo",
    "status": "Done"
  },
  {
    "_id": "60fadfc796dbc5f55f4adbe0",
    "title": "Another task",
    "status": "Pending"
  }
]
```
<h3>Todo Detail: </h3><p>Endpoint: <code>http://localhost:3000/todos/60fadbf0fb1e9926fb60c07d</code></p><p>Method: <code>GET</code></p>

<div>Response: <br>

```js
{
  "_id": "60fadbf0fb1e9926fb60c07d",
  "title": "First todo",
  "status": "Done"
}
```

<h3>Todo Create: </h3><p>Endpoint: <code>http://localhost:3000/todos</code></p><p>Method: <code>POST</code></p>

<div>Body: <br>

```js
{
  "title": "Demo Todo 1",
  "status": "Pending"
}
```

<div>Response: <br>

```js
{
  "_id": "60fb0e8bd8cd4f9cb52910a0",
  "title": "Demo Todo 1",
  "status": "Pending",
  "createdAt": "2021-07-23T18:46:35.288Z",
  "updatedAt": "2021-07-23T18:46:35.288Z",
  "__v": 0
}
```

<div><h3>Todo Update: </h3><p>Endpoint: <code>http://localhost:3000/todos/60fadbf0fb1e9926fb60c07d</code></p><p>Method: <code>PUT</code></p>

<div>Body: <br>

```js
{
  "title": "Demo Todo 1 Updated",
  "status": "Done"
}
```

</div><div>Response: <br />

```js
{
  "message": "Todo has been updated successfully !",
  "data": {
    "_id": "60fadbf0fb1e9926fb60c07d",
    "title": "Demo Todo 1 Updated",
    "createdAt": "2021-07-23T17:54:04.823Z",
    "updatedAt": "2021-07-23T18:54:12.279Z",
    "__v": 0,
    "status": "Done"
  }
}
```

<div><h3>Todo Delete: </h3><p>Endpoint: <code>http://localhost:3000/todos/60fadbf0fb1e9926fb60c07d</code></p><p>Method: <code>DELETE</code></p>

<div>Response: <br>

```js
{
  "message": "Todo has been deleted successfully !",
  "data": {
    "_id": "60fb139e55e09ca6e646e947",
    "title": "Test Todo",
    "status": "Done",
    "createdAt": "2021-07-23T19:08:14.137Z",
    "updatedAt": "2021-07-23T19:08:14.137Z",
    "__v": 0
  }
}
```

</div><div><h3>Todo Delete All: </h3><p>Endpoint: <code>http://localhost:3000/todos</code></p><p>Method: <code>DELETE</code></p>

<div>Response: <br>

```js
{
  "message": "7 Todos have been deleted successfully !"
}
```


#### Contribution:

1. Create Pull-Request to contribute this Todo API


#### Contact:

manirujjamanakash@gmail.com


#### Donate:
Patreon Link - https://www.patreon.com/maniruzzaman
