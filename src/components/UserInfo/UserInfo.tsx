import React from 'react';
import { User } from '../../types/Users';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user: { name, email } }) => (
  <p>
    {' Posted by  '}
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);