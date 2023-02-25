const express=require('express')
const { login, register, updateUser, deleteUser } = require('../../controllers/user')
const user_route=express()

user_route.post("/login",login)
user_route.post("/register",register)
user_route.patch("/update",updateUser)
user_route.delete("/delete",deleteUser)

module.exports={
    user_route
}