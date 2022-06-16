import React from 'react'

const Room = ({ room }) => {
  const image = !room.image ? 'https://img.freepik.com/free-photo/brown-sofa-wooden-table-living-room-interior-with-plant-concrete-wall_41470-3721.jpg?w=2000' : room.image;

  return (
    <div className='bg-gray-200'>
      <div className='max-w-[400px]'>
        <img src={image} alt="" className='object-cover w-full h-2/3 min-h-[66.6%] max-h-[66.6%]' />
      </div>
      <div className='p-2'>
        <h2 className='text-lg'>{room.type}</h2>
        <p className='text-sm'>{room.description}</p>
      </div>
      <div className='p-2 flex justify-center items-center border-t-4'>
        <button className='bg-teal-700 w-10/12 text-white px-4 py-1'>Book Now</button>
      </div>
    </div>
  )
}

export default Room