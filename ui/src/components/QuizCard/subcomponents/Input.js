import React from 'react'

export function Input({value, index}) {
  return(
    <>
      <input placeholder='Enter your answer' name='inputAnswer' type='input' id={`inputAnswer${index}`}/>
      <label for={`inputAnswer${index}`}>{value}</label>
    </>
  )
}