const login=async (req, res)=>{
    try{

    }catch(error){
        res.status(400).send({error:error.message})
    }
}


module.exports={
    login
}