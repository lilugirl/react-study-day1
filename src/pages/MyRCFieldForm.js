import React, { Component ,useEffect} from "react"
import Form,{Field} from '../components/my-rc-field-form'
import Input from '../components/Input'

const nameRules = { required: true, message: "请输入姓名！" };
const passwordRules = { required: true, message: "请输入密码！" };

// export default function MyRCFieldForm(props){
//     const [form]=Form.useForm();
//     const [form2]=Form.useForm();
 
  
//     const onFinish=(val)=>{
//         console.log('onFinish',val)
//     }
//     // 表单校验失败执行
//     const onFinishFailed=(err,val)=>{
//        console.log('onFinishFailed',err,val)
//     }

//     const onFinish2=(val)=>{
//         console.log('onFinish2',val)
//     }
//     // 表单校验失败执行
//     const onFinishFailed2=(err,val)=>{
//        console.log('onFinishFailed2',err,val)
//     }

//     useEffect(() => {
//        form.setFieldsValue({username:'default'})
//        form2.setFieldsValue({username:'default2'})
//     }, [])
//     return (<div>
//         <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//           <Field name="username" rules={[nameRules]}>
//               <Input placeholder="username" />
//           </Field>

//           <Field name="password" rules={[passwordRules]}>
//               <Input placeholder="password" />
//           </Field>

//           <button>Submit</button>
//         </Form>

//         <Form form={form2} onFinish={onFinish2} onFinishFailed={onFinishFailed2}>
//           <Field name="username" rules={[nameRules]}>
//               <Input placeholder="username" />
//           </Field>

//           <Field name="password" rules={[passwordRules]}>
//               <Input placeholder="password" />
//           </Field>

//           <button>Submit</button>
//         </Form>
//     </div>)
// }


export default class MyRCFieldForm extends Component{
    formRef=React.createRef();
    formRef2=React.createRef();
    componentDidMount(){
        console.log('formRef',this.formRef.current)
        console.log('formRef2',this.formRef2.current)
        this.formRef.current.setFieldsValue({username:'default'})
        this.formRef2.current.setFieldsValue({username:'default2'})
    }
    onFinish=(val)=>{
        console.log('onFinish',val)
    }
    // 表单校验失败执行
     onFinishFailed=(err,val)=>{
       console.log('onFinishFailed',err,val)
    }

    onFinish2=(val)=>{
        console.log('onFinish2',val)
    }
    // 表单校验失败执行
     onFinishFailed2=(err,val)=>{
       console.log('onFinishFailed2',err,val)
    }

    
    render(){
        return (<div>
            <Form ref={this.formRef} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
              <Field name="username" rules={[nameRules]}>
                  <Input placeholder="username" />
              </Field>
    
              <Field name="password" rules={[passwordRules]}>
                  <Input placeholder="password" />
              </Field>
    
              <button>Submit</button>
            </Form>
    
            <Form ref={this.formRef2} onFinish={this.onFinish2} onFinishFailed={this.onFinishFailed2}>
              <Field name="username" rules={[nameRules]}>
                  <Input placeholder="username" />
              </Field>
    
              <Field name="password" rules={[passwordRules]}>
                  <Input placeholder="password" />
              </Field>
    
              <button>Submit</button>
            </Form>
        </div>)
    } 
}




