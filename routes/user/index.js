const express=require('express')
const { login } = require('../../controllers/user')
const user_route=express()

user_route.post("/login",login)
user_route.post("/register",login)
user_route.patch("/update",login)
user_route.delete("/delete",login)

module.exports={
    user_route
}