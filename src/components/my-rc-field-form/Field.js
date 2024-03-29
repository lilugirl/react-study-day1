import React, { Component } from "react";
import FieldContext from "./FieldContext";

class Field extends Component {
  static contextType = FieldContext;
  onStoreChange=()=>{
      this.forceUpdate()
  }

  componentDidMount(){
      this.unregisterFieldEntities=this.context.registerFieldEntities(this)
  }

  componentWillUnmount(){
     this.unregisterFieldEntities();
  }

  getControlled = () => {
    const { getFieldValue,setFieldsValue } = this.context;
    const { name } = this.props;
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const newValue=e.target.value;
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
