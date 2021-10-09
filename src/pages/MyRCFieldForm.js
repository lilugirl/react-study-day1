import { Component ,useEffect} from "react"
import Form,{Field} from '../components/my-rc-field-form'
import Input from '../components/Input'

const nameRules = { required: true, message: "请输入姓名！" };
const passwordRules = { required: true, message: "请输入密码！" };

export default function MyRCFieldForm(props){
    const [form]=Form.useForm();
 
  
    const onFinish=(val)=>{
        console.log('onFinish',val)
    }
    // 表单校验失败执行
    const onFinishFailed=(val)=>{
       console.log('onFinishFailed',val)
    }

    // useEffect(() => {
    //    console.log('form',form)
    //    form.setFieldsValue({username:'default'})
    // }, [])
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
    </div>)
}

// export default class MyRCFieldForm extends Component{
//     render(){
//         return (<div>form</div>)
//     }
// }

