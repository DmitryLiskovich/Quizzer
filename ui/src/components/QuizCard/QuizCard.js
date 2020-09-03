import React from 'react';
import { Radio } from './subcomponents/Radio';
import { Checkbox } from './subcomponents/Checkbox';
import { Input } from './subcomponents/Input';

export function QuizCard({question, answers, type, resultState, input, moreDetail}) {
  return(
    <div>
      <h2>{question}</h2>
      <p>{moreDetail}</p>
      <form>
        { answers && answers.map((item, index) => {
          switch(type) {
            case 'radio': return <Radio value={item} index={index}/>
            case 'checkbox': return <Checkbox value={item} index={index}/>
            default: return
          }
        })}
        {input && <Input/>}
      </form>
    </div>
  )
}