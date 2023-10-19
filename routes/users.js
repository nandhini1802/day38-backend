import express from 'express';
import {user as userModel} from '../db/models.js';




const userRouter = express.Router();


userRouter.get('/',async (req,res)=>{
    try{
    const users= await userModel.find({},{id:1,name:1,dob:1,imageUrl:1,_id:0});
    res.send(users);
}catch(err)
{
    console.log(err);
    res.status(500).send({msg:'Error occuerred while fetching users'});
}
});

userRouter.get('/:name',(req,res)=>{
   
    res.send({msg:'Api coming Soon'});

});



userRouter.post('/', async(req, res) => {
 
try{
const user = new  userModel(req.body);
await user.save();
    res.send({msg:'user created '});
}catch(err){
    console.log(err);
    res.status(500).send({msg:'Error in creating'})
}
});



userRouter.put('/:userId', async(req, res) => {
    const {userId}=req.params;
    try{
        new  userModel(req.body);
        await userModel.updateOne({id:userId},{'$set':req.body});
            res.send({msg:'user updated '});
        }catch(err){
            console.log(err);
            res.status(500).send({msg:'Error in updating'})
        }
  



});

userRouter.delete('/:userId',async (req, res) => {
    const {userId}=req.params;
    try{
        await userModel.deleteOne({id:userId});
            res.send({msg:'user deleted '});
        }catch(err){
            console.log(err);
            res.status(500).send({msg:'Error in delete'})
        }

});

export default userRouter;