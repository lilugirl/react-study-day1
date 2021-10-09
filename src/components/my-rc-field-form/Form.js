import FieldContext from "./FieldContext";
import { useForm } from "./index";
export default function Form({ form, children, onFinish, onFinishFailed }) {
  // form
  const [formInstance] = useForm(form);
  formInstance.setCallbacks({onFinish,onFinishFailed})
 
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
