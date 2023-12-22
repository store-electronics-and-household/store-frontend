import React from 'react';
import { deleteUser } from '../../utils/api/user-api';
import { type IContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export interface IPopupOptions {
  title: string;
  buttonClass: string;
  buttonText: string;
  action: 'exit' | 'delete';
  closeFunction: () => void;
  setContextFunction: (args: IContext) => void;
}

const ProfileLayoutPopup = ({
  options,
}: {
  options: IPopupOptions;
}): JSX.Element => {
  const token = localStorage.getItem('token') ?? '';
  const navigate = useNavigate();
  const clearUser = (): void => {
    localStorage.clear();
    options.setContextFunction({
      isLoggedIn: false,
      userLastName: '',
      userName: '',
      userPhone: '',
      email: '',
    });
  };

  const handleSubmit = (): void => {
    switch (options.action) {
      case 'delete':
        deleteUser(token)
          .then((res) => {
            console.log(res);
            clearUser();
            navigate('/');
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      case 'exit':
        clearUser();
        navigate('/');
    }
  };

  return (
    <div className='profile-popup'>
      <div className='profile-popup__window'>
        <button
          onClick={options.closeFunction}
          className='profile-popup__close'
        ></button>
        <h3 className='profile-popup__title'>{options.title}</h3>
        <button
          onClick={handleSubmit}
          className={`${options.buttonClass} profile-popup__submit`}
        >
          {options.buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProfileLayoutPopup;
