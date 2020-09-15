const router = require('express').Router();
const quizSchema = require('../../Schemas/Quiz');

router.get('/', async (req, res) => {
  const quizzes = await quizSchema.find();
  return res.status(200).json({message: 'Ok', data: quizzes.filter(item => !item.config.quiz_public)});
})

router.get('/:id', async (req, res) => {
  const quiz = await quizSchema.findById(req.params.id);
  console.log(quiz);
  return res.status(200).json({message: 'Ok', data: quiz});
})

module.exports = router;