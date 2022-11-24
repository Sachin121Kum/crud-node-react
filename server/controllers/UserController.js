import UserModel from '../models/UserModel.js'

export const addUser =async(req,res) => {
    const user = req.body;
    const Validate_user  = new UserModel(user);
    try{
       await Validate_user.save();
       res.status(201).json(Validate_user);
    }catch(err){
       res.status(409).json({message:err.message});
    }
}

export const allUser = async (req,res) =>{
   try{
     const users =  await UserModel.find({});
     res.status(200).json(users);
   }catch(error){
     res.status(404).json({message:err.message});
   }

}

export const getUser = async (req,res) =>{
   console.log(req.params.id)
   try{
      const users =  await UserModel.findOne({_id:req.params.id});
      res.status(200).json(users);
    }catch(error){
      res.status(404).json({message:err.message});
    }
}

export const editUser = async(req,res) =>{
   let user = req.body;
   const editUser = new UserModel(user);
   try{
     await UserModel.updateOne({_id:req.params.id},editUser);
     res.status(200).json(user);

   }catch(error){
      res.status(409).json({message:err.message});
      
   }
}

export const deleteUser = async(req,res)=>{
   try{
      await UserModel.deleteOne({_id:req.params.id});
     res.status(200).json({message: "User deleted successfully"});

   }catch(error){
      res.status(409).json({message:err.message});

   }
}