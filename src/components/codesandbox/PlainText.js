import React, { useState, useEffect } from 'react'

export const PlainText = ({ onChange, value, shift }) => {
  const changeValue = e => {
    const value = e.target.value
    onChange(value)
  }

  return <input value={value} onChange={changeValue} placeholder={'Enter plain text'} />
}
