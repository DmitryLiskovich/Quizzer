const router = require('express').Router();
const bcrypt = require('bcrypt');
const user = require('../../Schemas/User');
const { email, required, password, passFull } = require('./validation/email');

router.post('/', async (req, res) => {
  const body = req.body;
  const isValid = email(body.email) && 
  [body.f_name, body.l_name].every(item => required(item)) && password(body.password, body.password_r) && passFull(body.password);

  if(!isValid) {
    let message;
    switch(true) {
      case !email(body.email): message = 'Incorect Email'; break;
      case !required(body.f_name): message = 'First name is required'; break;
      case !required(body.l_name): message = 'Last name is required'; break;
      case !password(body.password, body.password_r): message = 'Paswords should be equal and not empty'; break;
      case !passFull(body.password): message = 'Paswords should be minimum eight characters, at least one letter and one number'; break;
      default: message = 'Something wrong with server'
    }
    return res.status(401).json({message});
  }

  const users = await user.find();

  const salt = await bcrypt.genSalt(16);
  const passwordHash = await bcrypt.hash(body.password, salt);

  if(users.some(item => item.email === body.email)) {
    return res.status(401).json({message: 'Email was used'});
  }

  try {
    await user.create({
      email: body.email,
      password: passwordHash,
      f_name: body.f_name,
      l_name: body.l_name,
      company: body.company,
      position: body.position
    });

    return res.status(200).json({message: 'Created'});
  }
  catch(e) {
    return res.status(401).json({message: e});
  }
})

module.exports = router;