const express = require('express');
const router = express.Router();
const Users = require('../models/userSchema')


// router.get('/', (req, res)=>{
//     console.log("connect")
// })


//         Register New Data

router.post('/register', async (req, res) => {
  const { name, email, age, mobile, work, add, desc } = req.body;

  if (!name || email || age || mobile || work || add || desc) {
    // res.send({data: "Not found please fill the data"})
  }
  try {
    const preuser = await Users.findOne({ email: email });
    console.log(preuser)

    if (preuser) {
      res.json({ data: "exists" })
    } else {
      const addUser = new Users({
        name, email, age, mobile, work, add, desc
      })

      await addUser.save();
      res.status(201).json(addUser)
      console.log(addUser);
    }

  } catch (error) {
    res.json({ error: "Found some error" })
  }
})

//        Get User Data 


router.get('/getdata', async (req, res) => {
  try {
    const userData = await Users.find();
    // console.log(userData)
    res.status(201).json(userData)
  } catch (error) {
    console.log(error.message)
  }
})


// Get Details of user

router.get('/getuser/:id', async (req, res) => {
  try {
    console.log(req.params)
    const { id } = req.params;
    const userIndividual = await Users.findById({ _id: id })

    console.log(userIndividual)
    res.status(201).json(userIndividual)
  } catch (error) {
    res.json({ Error: "Found" })
  }
})


// Update User Data

router.patch('/updateuser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userUpdate = await Users.findByIdAndUpdate(id, req.body, {
      new: true
    })
    console.log(userUpdate)
    res.status(201).json(userUpdate)
  } catch (error) {
    res.status(422).json(error)
  }
})


// Delete User


router.delete('/deleteuser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await Users.findByIdAndDelete({_id: id})
    console.log(deleteUser)
    res.status(201).json(deleteUser)
  } catch (error) {
    res.status(422).json(error)
  }
})
module.exports = router;