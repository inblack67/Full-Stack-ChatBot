import React from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className='container'>
      <h5 className='center red-text'>Join Room</h5>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className='input-field'>
          <input
            type='text'
            name='name'
            ref={register({
              required: true,
            })}
          />
          <label htmlFor='name'>Name</label>
        </div>
        <div className='input-field'>
          <select
            ref={register({
              required: true,
            })}
            name='room'
          >
            <option value='' disabled defaultValue>
              Choose Your Poison
            </option>
            <option value='Node.js'>Node.js</option>
            <option value='React.js'>React.js</option>
            <option value='Next.js'>Next.js</option>
            <option value='GraphQL'>GraphQL</option>
          </select>
          <label>Room</label>
        </div>
        <button type='submit' className='btn red'>
          Join Room
        </button>
      </form>
    </div>
  );
};

export default Home;
