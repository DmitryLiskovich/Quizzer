const router = require('express').Router();
const bcrypt = require('bcrypt');
const user = require('../../Schemas/User');
const { email, required, password } = require('./validation/email');

router.post('/', async (req, res) => {
  const body = req.body;
  const isValid = email(body.email) && 
  [body.f_name, body.l_name].every(item => required(item)) && password(body.password, body.password_r);

  if(!isValid) {
    return res.status(401).json({message: 'Validation failed'});
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