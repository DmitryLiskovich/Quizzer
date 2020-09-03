import React from 'react'

export function Checkbox({value, index}) {
  return(
    <>
      <input value={value} name='checkBoxBtn' type='checkbox' id={`checkBoxBtn${index}`}/>
      <label for={`checkBoxBtn${index}`}>{value}</label>
    </>
  )
}