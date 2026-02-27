import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Bun dev! This is Elysia \n I'm gonna build a RESTFUL API!!")
.get('/post/:id', ({params: {id}}) => {return {id: id, title: 'Learn Bun'}})
// .post('/post',({body}))
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
