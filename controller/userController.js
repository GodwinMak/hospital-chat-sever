const User = require('../models/UserModel');

// creating user
module.exports.siginup = async (req, res)=>{
    try {
    const {name, email, password, picture} = req.body;
    console.log(req.body);
    const user = await User.create({name, email, password, picture});
    res.status(201).json(user);
  } catch (error) {
    let msg;
    if(error.code == 11000){
      msg = "User already exists"
    } else {
      msg = e.message;
    }
    console.log(error);
    res.status(400).json(msg)
  }
}

// login user
module.exports.login =  async(req, res)=> {
  try {
    const {email, password} = req.body;
    const user = await User.findByCredentials(email, password);
    user.status = 'online';
    await user.save();
    res.status(200).json(user);
  } catch (e) {
      res.status(400).json(e.message)
  }
}