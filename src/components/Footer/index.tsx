import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
        border: '1px solid #e9e9e9',
      }}
      copyright={`${new Date().getFullYear()} Supreme Websol`}
      links={[
        {
          key: 'Supreme Websol',
          title: 'Supreme Websol',
          href: 'https://supremewebsol.top',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
