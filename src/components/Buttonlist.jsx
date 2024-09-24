import React from 'react'
import Button from './Button'

const Buttonlist = () => {
  const list = ["All", "Games", "Entertainment", "Music", "Comedy", "Movies", "Podcast", "Test Drive", "Education", "Motivation"];

  return (
    <div className='flex flex-wrap gap-2 p-2'>
      {list.map((category, index) => (
        <Button key={index} text={category} />
      ))}
    </div>
  )
}

export default Buttonlist
