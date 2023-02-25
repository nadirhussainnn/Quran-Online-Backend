const login=async (req, res)=>{
    try{
        console.log("login controller")
    }catch(error){
        res.status(400).send({error:error.message})
    }
}

const register=async (req, res)=>{
    try{
        console.log(`register controller`)

    }catch(error){
        res.status(400).send({error:error.message})
    }
}

const updateUser=async (req, res)=>{
    try{

    }catch(error){
        res.status(400).send({error:error.message})
    }
}

const deleteUser=async (req, res)=>{
    try{

    }catch(error){
        res.status(400).send({error:error.message})
    }
}

module.exports={
    login,
    register,
    updateUser,
    deleteUser
}