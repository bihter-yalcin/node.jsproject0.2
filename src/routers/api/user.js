const { Router } =require ('express')

const route = Router()
module.exports =route


//TODO: Send current user
route.get('/', (req, res) =>
{res.send( {"user":{
    "email":"hello",
        "token":"jake"
}})})