import FieldContext from "./FieldContext";
import { useForm } from "./index";
export default function Form({ form, children }) {
  // form
  const [formInstance] = useForm(form);
  console.log("formInstance", formInstance);
  return (
    <FieldContext.Provider value={formInstance}>
      {children}
    </FieldContext.Provider>
  );
}
