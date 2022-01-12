import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createUser, deleteUser, getAllUser, getUser, updateUser,
} from '../../app/usersReducer/usersActions';

const UsersList = () => {
  const dispatch = useDispatch();
  const {
    status, error, user, users,
  } = useSelector((state) => state.users);

  const newUser = {
    id: 1290,
    name: 'Susana',
    email: 'susana@pere.com',
    password: '123559',
  };

  const userToUpdate = {
    name: 'Pedro Sanch',
    email: 'pedroSanez@mail.com',
    password: '1234',
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
    content = (
      <div>
        <div>
          <p>
            Id de usuario:
            {' '}
            {user?.id}
          </p>
          <p>
            Nombre:
            {' '}
            {user?.name}
          </p>
        </div>
        <div>
          {users?.map((u) => <p style={{ textAlign: 'center' }} key={u.id}>{u.name}</p>)}
        </div>
      </div>
    );
  } else if (status === 'Failed') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <button type="button" onClick={() => dispatch(getAllUser())}>Ver todos los usuarios</button>
      <button type="button" onClick={() => dispatch(createUser(newUser))}>Crear usuario</button>
      <button type="button" onClick={() => dispatch(updateUser({ id: 1290, user: userToUpdate }))}>Actualizar usuario</button>
      <button type="button" onClick={() => dispatch(getUser(950))}>Ver usuario por Id</button>
      <button type="button" onClick={() => dispatch(deleteUser(1281))}>Eliminar usuario</button>
      <h2>Users</h2>
      {content}
    </section>
  );
};

export default UsersList;
