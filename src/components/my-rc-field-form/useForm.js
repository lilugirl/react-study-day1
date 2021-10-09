import {useRef} from 'react'

class FormStore{
  constructor(){
      // state仓库
      this.store={}
      // 实例
      this.fieldEntities=[];
      this.callbacks={};
  }

  setCallbacks=(newCallbacks)=>{
     this.callbacks={
         ...this.callbacks,
         ...newCallbacks
     }
  }

  // 订阅和取消订阅 监听和取消监听成对出现
  registerFieldEntities=(field)=>{
       this.fieldEntities.push(field);

       // 取消订阅
       return ()=>{
         this.fieldEntities=this.fieldEntities.filter(_f=>_f!==field)
         delete this.store[field.props.name]
        }
  }

  // get
  getFieldsValue=()=>{
      return {...this.store}
  };

  getFieldValue=(name)=>{
      return this.store[name];
  }
  // set {username:123} store里有username password
  setFieldsValue=(newStore)=>{
      this.store={
          ...this.store,
          ...newStore
      };
     
      // 订阅对应组件更新
      // todo 2 组件卸载的时候取消订阅
      console.log('store',this.store)

      this.fieldEntities.forEach(_f=>{
          Object.keys(newStore).forEach(key=>{
              if(key===_f.props.name){
                _f.onStoreChange()
              }
          })
          
      })
  };

  validate=()=>{
      let err=[];

      // todo
      return err;
  }
  onSubmit=()=>{
    console.log('onsubmit this',this)
    let err=this.validate();
    if(err.length===0){
        // 校验通过
        this.callbacks.onFinish(this.getFieldsValue());
    }else{
        // 校验未通过
        this.callbacks.onFinishFailed(err,this.getFieldsValue());
    }


  }

  getForm=()=>{
      return {
          setFieldsValue:this.setFieldsValue,
          getFieldValue:this.getFieldValue,
          getFieldsValue:this.getFieldsValue,
          registerFieldEntities:this.registerFieldEntities,
          onSubmit:this.onSubmit,
          setCallbacks:this.setCallbacks
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