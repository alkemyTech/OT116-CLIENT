import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createUser, deleteUser, getAllUser, getUser, updateUser,
} from '../../app/usersReducer/usersActions';

const UsersList = () => {
  const dispatch = useDispatch();
  const {
    status, error, users,
  } = useSelector((state) => state.users);

  const newUser = {
    id: 1282,
    name: 'Pedro Perez',
    email: 'pedro@perez.com',
    email_verified_at: null,
    password: '123456',
    role_id: 1,
    remember_token: null,
    created_at: '2021-11-28T21:38:57.000000Z',
    updated_at: '2021-11-28T21:38:57.000000Z',
    deleted_at: null,
    group_id: null,
    latitude: null,
    longitude: null,
    address: null,
    profile_image: null,
  };

  const userToUpdate = {
    id: 1282,
    name: 'Pedro Sanchez',
    email: 'pedroSanchez@mail.com',
    email_verified_at: null,
    password: '123456',
    role_id: 1,
    remember_token: null,
    created_at: '2021-11-28T21:38:57.000000Z',
    updated_at: '2021-11-28T21:38:57.000000Z',
    deleted_at: null,
    group_id: null,
    latitude: null,
    longitude: null,
    address: null,
    profile_image: null,
  };

  useEffect(() => {
    if (status === null) {
      dispatch(getAllUser());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'Loading') {
    content = <p style={{ textAlign: 'center' }}>Loading...</p>;
  } else if (status === 'Success') {
    content = users?.map((u) => <p style={{ textAlign: 'center' }} key={u.id}>{u.name}</p>);
  } else if (status === 'Failed') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <button type="button" onClick={() => dispatch(getAllUser())}>Ver todos los usuarios</button>
      <button type="button" onClick={() => dispatch(createUser(newUser))}>Crear usuario</button>
      <button type="button" onClick={() => dispatch(updateUser(userToUpdate.id, userToUpdate))}>Actualizar usuario</button>
      <button type="button" onClick={() => dispatch(getUser(950))}>Ver usuario por Id</button>
      <button type="button" onClick={() => dispatch(deleteUser(1281))}>Eliminar usuario</button>
      <h2>Users</h2>
      {content}
    </section>
  );
};

export default UsersList;
