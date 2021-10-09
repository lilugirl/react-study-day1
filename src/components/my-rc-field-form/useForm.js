import {useRef} from 'react'

class FormStore{
  constructor(){
      // state仓库
      this.store={}

      this.fieldEntities=[];
  }

  registerFieldEntities=(field)=>{
       this.fieldEntities.push(field);
  }

  // get
  getFieldsValue=()=>{
      return {...this.store}
  };

  getFieldValue=(name)=>{
      return this.store[name];
  }
  // set
  setFieldsValue=(newStore)=>{
      this.store={
          ...this.store,
          ...newStore
      };
      // 组件没有更新
      // 订阅组件更新
      console.log('store',this.store)

      this.fieldEntities.forEach(_f=>{
          _f.onStoreChange()
      })
  };

  getForm=()=>{
      return {
          setFieldsValue:this.setFieldsValue,
          getFieldValue:this.getFieldValue,
          getFieldsValue:this.getFieldsValue,
          registerFieldEntities:this.registerFieldEntities
      }
  }

}

export default function useForm(form){
    const formRef=useRef();
    // 把getForm存起来 ，目的保证组件每次更新用的都是这个getForm
    if(!formRef.current){
       if(form){
           formRef.current=form
       }else{
        const formStore=new FormStore()
        formRef.current=formStore.getForm();
       }
    }
   
    return [formRef.current]
}