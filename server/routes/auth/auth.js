const router = require('express').Router();
const bcrypt = require('bcrypt');
const userSchema = require('../../Schemas/User');

router.post('/', async (req, res) => {
  const body = req.body;

  const user = await userSchema.findOne({email: body.email});
  
  if(!user) {
    return res.status(401).json({message: 'User not found'});
  }

  const result = await bcrypt.compare(body.password, user.password);
  
  if(result) {
    return res.status(200).json({message: 'Ok', user: {
      email: user.email,
      f_name: user.f_name,
      l_name: user.l_name,
      company: user.company,
      position: user.position
    }});
  } else {
    return res.status(401).json({message: 'Password is not correct'});
  }
})

module.exports = router;