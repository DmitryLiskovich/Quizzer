const router = require('express').Router();
const quizSchema = require('../../Schemas/Quiz');

router.post('/', (req, res) => {
  console.log(req.body)
  quizSchema.create(req.body);
  return res.status(200).json({message: 'Ok'});
})

module.exports = router;