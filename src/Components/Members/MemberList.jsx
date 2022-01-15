import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMembers,
  getMemberbyId,
  updateMember,
  createMember,
  deleteMember,
} from '../../app/membersReducer/membersActions';

const MembersModiList = function () {
  const dispatch = useDispatch();
  const {
    status, error, member, members,
  } = useSelector((state) => state.members);

  const newMember = {
    id: 455,
    name: 'Susanita Martinez',
    email: 'susananita@pere.com',
    password: '98789',
    image: 'http://ongapi.alkemy.org/storage/ByrWNAKznM.jpeg',
  };

  const memberToUpdate = {
    id: 457,
    name: 'María Garcia',
    image: 'http://ongapi.alkemy.org/storage/ByrWNAKznM.jpeg',
  };

  useEffect(() => {
    if (status === null) {
      dispatch(getMembers());
    }
  }, [status, dispatch]);

  let content = <h4>No elements</h4>;

  if (status === 'Loading') {
    content = <p style={{ textAlign: 'center' }}>Loading...</p>;
  } else if (status === 'Success') {
    content = (
      <div>
        <div>
          <p>
            Id de miembro:
            {' '}
            {member?.id}
          </p>
          <p>
            Nombre:
            {' '}
            {member?.name}
          </p>
        </div>
        <div>
          {members?.map((u) => <p style={{ textAlign: 'center' }} key={u.id}>{u.name}</p>)}
        </div>
      </div>
    );
  } else if (status === 'Failed') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <button type="button" onClick={() => dispatch(getMembers())}>Ver todos los miembros</button>
      <button type="button" onClick={() => dispatch(createMember, (newMember))}>Crear miembro</button>
      <button type="button" onClick={() => dispatch(updateMember, ({ id: 457, member: memberToUpdate }))}>Actualizar miembro</button>
      <button type="button" onClick={() => dispatch(getMemberbyId(457))}>Ver miembro por Id</button>
      <button type="button" onClick={() => dispatch(deleteMember(457))}>Eliminar miembro</button>
      <h2>Members</h2>
      {content}
    </section>
  );
};

export default MembersModiList;
