import React, { useState } from 'react'

export const Shift = ({ onChange }) => {
  // const [value, setValue] = useState('Enter a shift amount')
  const [num, setNum] = useState(0)


  // const changeValue = e => {
  //   const value = e.target.value
  //   setValue(value)
  //   onChange(value)
  // }

  const changeValue2 = e => {
    const val = e.target.value
    setNum(val)
    onChange(val)
  }


  // const add = e => {
  //   setNum(num + 1)
  // }
  // const subtract = e => {
  //   setNum(num -1)
  // }

  return (
    <div>

      {/* <button onClick={add}>Add</button> */}
      <h4>Add: {num}</h4>
      <form>


        <select value={num} onChange={changeValue2} placeholder={'ss'} className="selectform">
          {/* <option value="" disabled>
          Enter shift amount
        </option> */}
          <option value={0}>Enter shift amount</option>

          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
        </select>

      </form>

    </div>
  )
}