

const path = require('path');




module.exports = function (plop) {
 const a =  plop.setGenerator('component', {
    description: '创建一个新组件',
    prompts: [
      { type: 'input', name: 'name', message: '请输入组件名称（多个单词以中横线命名）' },
      { type: 'input', name: 'path', message: '请输入组件基于src路径（如:view/home）' },
      {
        type: 'list',
        name: 'type',
        message: '请选择组件类型',
        choices: ['function', 'class'],
      },
    ],
    actions: [{
      type: 'add',
      path: path.resolve(__dirname, '../src/{{path}}/{{kebabCase name}}/index.tsx'),
      templateFile: path.resolve(__dirname, '../templates/page/index.hbs'),
    },
      {
      type: 'add',
      path: path.resolve(__dirname, '../src/{{path}}/{{kebabCase name}}/index.scss'),
      templateFile: path.resolve(__dirname, '../templates/style/index.hbs'),
      },
    
    ]
  
 })
  

}