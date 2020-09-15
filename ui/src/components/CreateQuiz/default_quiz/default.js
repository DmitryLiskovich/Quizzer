export const defaultQuiz = {
  "config":{
     "quiz_expire":24,
     "quiz_size":10,
     "quiz_keywords":"JS",
     "quiz_get_res":false,
     "quiz_public":false,
     "quiz_title": "JavaScript First Test",
  },
  "questions":[
     {
        "question":"Какие варианты вызова try..catch являются синтаксически верными в JavaScript?",
        "type":"checkbox",
        "details":"",
        "answers":[
           {
              "placeholder":"Enter answer",
              "value":"try { ... } без catch/finally.",
              "isCorrect":false
           },
           {
              "placeholder":"Enter answer",
              "value":"try { ... } catch { ... }",
              "isCorrect":true
           },
           {
              "placeholder":"Enter answer",
              "value":"try { ... } finally { ... }",
              "isCorrect":true
           },
           {
              "placeholder":"Enter answer",
              "value":"try { ... } catch { ... } finally { ... }",
              "isCorrect":true
           },
           {
              "placeholder":"Enter answer",
              "value":"В JavaScript не поддерживается try..catch.",
              "isCorrect":false
           }
        ]
     },
     {
        "question":"Чему равно это выражение?",
        "type":"radio",
        "details":"[].push(1,2).unshift(3).join()",
        "answers":[
           {
              "placeholder":"Enter answer",
              "value":"3,1",
              "isCorrect":false
           },
           {
              "placeholder":"Enter answer",
              "value":"1,2,3",
              "isCorrect":false
           },
           {
              "placeholder":"Enter answer",
              "value":"3,1,2",
              "isCorrect":true
           },
           {
              "placeholder":"Enter answer",
              "value":"В коде ошибка.",
              "isCorrect":false
           }
        ]
     },
     {
        "question":"Какие варианты подключения скрипта являются корректными с точки зрения современного стандарта HTML?",
        "type":"checkbox",
        "details":"",
        "answers":[
           {
              "placeholder":"Enter answer",
              "value":"<script type=\"text/javascript\" src=\"my.js\"></script>",
              "isCorrect":true
           },
           {
              "placeholder":"Enter answer",
              "value":"<script src=\"my.js\"></script>",
              "isCorrect":true
           },
           {
              "placeholder":"Enter answer",
              "value":"<script src=\"my.js\"/>",
              "isCorrect":true
           },
           {
              "placeholder":"Enter answer",
              "value":"<хачу-javascript отсюда=\"my.js\">",
              "isCorrect":false
           }
        ]
     }
  ],
  "_id":"5f50edce3216a733dc6204df",
  "__v":0
}