/**
 * $开头表示原生标签
 */
const pageConfigList: Array<any> = [
  {
    type: 'page',
    name: 'Page',
    filename: 'out.jsx',
    opt: {},
    /**
     * 组件分三类
     * 1. 原生组件
     * 2. 内部组件
     * 3. 第三方组件库
     */
    children: [
      {
        name: 'Tab',
        opt: {},
        children: [
          {
            name: '$div',
            propList: [{
              name: 'attr1',
              value: 'attr1-value'
            }, 'attr2'],
            children: []
          }
        ]
      },
      {
        name: 'Nav',
        opt: {},
        children: [
          {
            name: '$div',
            propList: ['attr3', 'attr4'],
            children: []
          }
        ]
      },
    ],
  },
]

export default pageConfigList