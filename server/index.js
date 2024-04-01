const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/test")

app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//Delete code  
// app.post('/deleteUser', async(req, res) => {
//     const {userid} = req.body;
//     try {
//         UserModel.deleteOne(
//             {_id:userid},function(err,res){
//                 console.log(err);
//             }
//         );
//         res.send({ status: 'Ok', data: 'Deleted'});
//     } catch (error) {
//         console.log(error);
//     }
// })
app.listen(3001, () => {
    console.log("server is running")
})