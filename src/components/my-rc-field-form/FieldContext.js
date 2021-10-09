import React from 'react'
// context
// 1 创建context对象

const FieldContext=React.createContext();
export default FieldContext;

// 2 通过Provider传递value

// 3 后代消费value  1 contextType 只能用class，并且只能订阅单一context来源  2useContext 只能用在函数组件或者自定义hook中 3Consumer 没有限制