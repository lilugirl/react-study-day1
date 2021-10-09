import React from "react";
import FieldContext from "./FieldContext";
import { useForm } from "./index";
export default function Form({ form, children, onFinish, onFinishFailed },ref) {
  // form
  // 对于使用form是类组件，初次初始化数据仓库，发生在这里，而函数组件则是发生在From的父组件
  const [formInstance] = useForm(form);
  formInstance.setCallbacks({onFinish,onFinishFailed})
  React.useImperativeHandle(ref,()=>formInstance)
 
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      formInstance.onSubmit()
    }}>
    <FieldContext.Provider value={formInstance}>
      {children}
    </FieldContext.Provider>
    </form>
  );
}
