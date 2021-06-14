import React, { useState, useEffect } from 'react'

export const CypherText = ({ onChange, value, shift }) => {
  const changeValue = e => {
    const value = e.target.value
    onChange(value)
  }

  return <input value={value} onChange={changeValue} placeholder={'Enter cypher text'} />
}
