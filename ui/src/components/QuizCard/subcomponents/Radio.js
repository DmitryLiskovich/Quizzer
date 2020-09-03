import React from 'react'

export function Radio({value, index}) {
  return(
    <>
      <input value={value} name='radioBtn' type='radio' id={`radioBtn${index}`}/>
      <label for={`radioBtn${index}`}>{value}</label>
    </>
  )
}