import React from 'react'
import heaer from '../assets/fire.jpg'
import PlusIcon from '../icons/PlusIcon';
import KanbanBoard from './KanbanBoard';
export default function header() {
  return (
    <div className='
    flex
    flex-row
    justify-between
    items-center
    bg-mainBackgroundColor 
    h-16 
    ring-rose-500
    hover:ring-2 
    text-white
    '>
      <div className='
      flex
      justify-around
      items-center
      h-10
      w-18
      '>
        <img className='h-8 w-10' src='https://png.pngtree.com/png-clipart/20220921/original/pngtree-fire-logo-png-image_8625285.png'></img>
        <h3>Task Manager</h3>
      </div>

      <div>
      
      </div>
    </div>
  )
}
