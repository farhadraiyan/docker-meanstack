const express=require("express");
const router=express.Router();
const Video=require('../models/Videos');
//retrieve
router.get('/videolist',(req,res,next)=>
{
Video.find(function(err,videos){
res.json(videos);
})
});
//add contact

router.post('/addvideo',(req,res,next)=>
{
    let newVideo=new Video({
        title:req.body.title,
        runtime:req.body.runtime,
        genre:req.body.genre,
        rating:req.body.rating,
        director:req.body.director,
        status:req.body.status,
        imgPath:req.body.imgPath,
    });
    newVideo.save((err,contact)=>
    {
        if(err)
        {
            res.json({msg:"contact not saved"})
        }
        else{
            res.json({msg:"contact  saved"})
        }
    })

});

//delete cont
// router.delete("/delete/:id", (req,res,next)=>
// {
// router.remove({__id:req.body.params.id},(err,result)=>
// {
//     if(err){
//         res.json(err)
//     }
//     else{
//         res.json(result)
//     }
// })
// });
    


module.exports=router;