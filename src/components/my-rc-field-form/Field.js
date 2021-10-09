import React, { Component } from "react";
import FieldContext from "./FieldContext";

class Field extends Component {
  static contextType = FieldContext;
  onStoreChange=()=>{
      this.forceUpdate()
  }

  componentDidMount(){
      this.context.registerFieldEntities(this)
  }

  getControlled = () => {
    const { getFieldValue,setFieldsValue } = this.context;
    const { name } = this.props;
    console.log(name,getFieldValue(name))
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const newValue=e.target.value;
        console.log('newValue',newValue);
        console.log({[name]:newValue})
        setFieldsValue({[name]:newValue});
      },
    };
  };
  render() {
    const { children } = this.props;
    const returnChildNode = React.cloneElement(children, this.getControlled());
    return returnChildNode;
  }
}

export default Field;
