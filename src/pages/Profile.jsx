import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../MyContext/Context';
import MenuInf from '../components/MenuInf';

function Profile({ history }) {
  const { setCurLocation } = useContext(MyContext);

  useEffect(() => {
    setCurLocation(history);
  });

  return (
    <div>
      <div>Perfil</div>
      <MenuInf />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape(PropTypes.any).isRequired,
}.isRequired;

export default Profile;
