

// 导出模板

 const page = name => `
  import React from 'react';
  import './index.scss';
  const ${name} = () => {
    return <div className=${name} >Hello 👋, I am a ${name} .</div>;
  };
  export default ${name};
`;


const style = name => `
  .${name} {
    color: red;
  }
`;


export { page, style };