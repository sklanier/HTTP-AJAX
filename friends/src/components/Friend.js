import React from 'react';

const NewFriend = props => {
  const { NewFriend } = props;
  return (
    <div>
      <h2>Add Friend</h2>
      <form>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={props.handleChange}
          name="name"
          value={NewFriend.name}
        />
        <br />

        <label>Age: </label>
        <input
          type="text"
          placeholder="Enter Age"
          onChange={props.handleChange}
          name="age"
          value={NewFriend.age}
        />
        <br />

        <label>Email: </label>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={props.handleChange}
          name="email"
          value={NewFriend.email}
        />
        <br />

        <button onClick={props.submitNewFriend}>Add New Friend</button>
      </form>
    </div>
  );
}

export default NewFriend; 