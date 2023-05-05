const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const abc = require('./modelofreg');
const app = express();
const dotenv = require('dotenv')
dotenv.config();

app.use(cors());
app.use(express.json());
mongoose.set('strictQuery', false);




const url = `${process.env.MONGO}`


mongoose.connect(url)

app.post('/adding', async(req, res) => {

    const content = req.body.first;


    const ex = await abc.findOne({ username: "pss" });


    await abc.updateOne({ username: "pss" }, { $push: { blogs: content } }, { upsert: true });

    const updatedEx = await abc.findOne({ username: "pss" });





})




app.post('/gettrending', async(req, res) => {




    const results = await abc.find({}).sort({ updatedAt: -1 });
    const response = results.map((doc) => {
        return {
            blogs: doc.blogs.reverse(),
            createdAt: doc.createdAt.toLocaleDateString()

        };
    });


    res.json(response)



})

app.post('/del', async(req, res) => {

    const index = req.body.num;
    const use = await abc.findOne({ username: "pss" });
    const blogIndex = parseInt(index);
    use.blogs.splice(blogIndex, 1);
    await use.save();

});



if (process.env.API_Port) {


    app.listen(process.env.API_Port);



}








module.exports = app;
