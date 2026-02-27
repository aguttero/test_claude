import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Bun dev! This is Elysia \n I'm gonna build a RESTFUL API!!")
.get('/post/:id', ({params: {id}}) => {return {id: id, title: 'Learn Bun'}})
.post('/context', (context) => {return context})
.post('/bodyfull', (body) => {return body})
.post('/bodyclean', (body) => {return body.body})
.post('/bodyonly', ({body}) => {return body})
.post('/bodyset', ({body, set}) => {
  set.status = 201
  return body
})
.get('/track/*', () => {return {text:'title', title: 'wildcard answer'}})
// return JSON Array
.get('/jsonarray1', () => {
  return new Response(JSON.stringify({
    "tracks": [
      'Dancing Feat',
      'Sam I',
      'Animals'
    ]
  })
  ,{
     headers: {
      'Content-Type':'application/json'
     }
    }
 )
})
.get('/jsonarray2', () => {
  return {
    "tracks": [
      'Dancing Feat',
      'Sam I',
      'Animals',
      'New Song'
    ]
  }
  })
//.post('/post',({body}))
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
