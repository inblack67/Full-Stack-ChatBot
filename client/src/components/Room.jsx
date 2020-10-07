import React, { Fragment, useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket;

const Room = ({ match }) => {
  const [room, setRoom] = useState('');
  const [user, setUser] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = new io('http://localhost:5000');
    setRoom(match.params.room);
    setUser(match.params.user);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    socket.on('intro', (message) => {
      setMessages([...messages, message]);
    });

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <p className='flow-text center red-text'>{room}</p>
      {messages.length > 0 && (
        <Fragment>
          <ul className='collection blue-text'>
            {messages.map((message, index) => (
              <li className='collection-item' key={index}>
                {message}
              </li>
            ))}
          </ul>
        </Fragment>
      )}
    </div>
  );
};

export default Room;
