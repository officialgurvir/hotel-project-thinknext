import axios from 'axios';
import React from 'react'
import Room from '../components/Room';

const List = () => {
  const [rooms, setRooms] = React.useState([]);

  React.useLayoutEffect(function () {
    const getRooms = async function () {
      const request = axios.get('rooms/all');
      const response = (await request).data;

      setRooms(response);
    }

    getRooms();
  }, []);

  return (
    <div className='w-screen h-auto pt-2 px-4 flex justify-center items-center md:flex-row flex-col gap-4'>
      {
        rooms.map(room => <Room key={Math.random() + room.type} room={room} />)
      }
    </div>
  )
}

export default List