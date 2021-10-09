import { Component ,useEffect} from "react"
import Form,{Field} from '../components/my-rc-field-form'
import Input from '../components/Input'

const nameRules = { required: true, message: "请输入姓名！" };
const passwordRules = { required: true, message: "请输入密码！" };

export default function MyRCFieldForm(props){
    const [form]=Form.useForm();
    const [form2]=Form.useForm();
 
  
    const onFinish=(val)=>{
        console.log('onFinish',val)
    }
    // 表单校验失败执行
    const onFinishFailed=(err,val)=>{
       console.log('onFinishFailed',err,val)
    }

    const onFinish2=(val)=>{
        console.log('onFinish2',val)
    }
    // 表单校验失败执行
    const onFinishFailed2=(err,val)=>{
       console.log('onFinishFailed2',err,val)
    }

    useEffect(() => {
       form.setFieldsValue({username:'default'})
    }, [])
    return (<div>
        <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Field name="username" rules={[nameRules]}>
              <Input placeholder="username" />
          </Field>

          <Field name="password" rules={[passwordRules]}>
              <Input placeholder="password" />
          </Field>

          <button>Submit</button>
        </Form>

        <Form form={form2} onFinish={onFinish2} onFinishFailed={onFinishFailed2}>
          <Field name="username2" rules={[nameRules]}>
              <Input placeholder="username" />
          </Field>

          <Field name="password2" rules={[passwordRules]}>
              <Input placeholder="password" />
          </Field>

          <button>Submit</button>
        </Form>
    </div>)
}

// export default class MyRCFieldForm extends Component{
//     render(){
//         return (<div>form</div>)
//     }
// }

