const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/StudentRecord',
  {
    useNewUrlParser:true,
  }).then(()=>{
     console.log("Run Succefully");
  }).catch(()=>{
    console.log("Error in the code");
  })