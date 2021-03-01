const express = require('express')

const router = express.Router()

const Item = require('../../models/Item')

// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })

router.get('/',async(req, res)=>{
    try{
        // const items = await Items.find() 
             Item.find()
            .sort({date:-1})
            .then((items=>res.json(items)))

        // res.send(items)
    }
    catch{
        res.send("Item not found")
    }
    
 
})

router.post('/',(req,res)=>{

    const newItem = new Item({
        name: req.body.name
    })
    newItem.save().then(item=>res.json(item))
})

router.delete('/:id',(req,res)=>{

  Item.findById(req.params.id)
  .then(item=>item.remove().then(
      ()=>res.json({success:true})))
      .catch(err=>res.status(404).json({success:false}))

})
// 

module.exports = router