import { Component } from "react";
import { Context, UserContext } from "../Context";
import ConsumerPage from "./ConsumerPage";
import ContextTypePage from "./ContextTypePage";
import UseContextPage from "./UseContextPage";


export default class ContextPage extends Component{
    constructor(props){
        super(props);
        this.state={
            theme:{
                themeColor:"red"
            },
            user:{
                name:'liuyi'
            }
        };
    }
    changeColor=()=>{
        const {theme}=this.state;
        const {themeColor}=theme;
        this.setState({
            theme:{
                themeColor:themeColor==='red'?'blue':'red'
            }
        })
    }
    render(){
        const {theme,user}=this.state;
        return (
            <div>
                <h3>ContextPage</h3>
                <button onClick={this.changeColor}>改变颜色</button>
                <Context.Provider value={theme}>
                    <UserContext.Provider value={user}>
                     <ContextTypePage />
                     <UseContextPage />
                     <ConsumerPage />
                   </UserContext.Provider>        
                </Context.Provider>
            </div>
        )
    }
}

// * 如何使用Context
// step1 创建一个Context对象
// step2 创建Provider传递value
// step3 子组件消费value 有三种途径 1 contextType 2 useContext 3 Consumer

// * 区别
// contextType只能用在类组件, 只能订阅单一的context来源
// useContext只能用在函数组件 或者自定义hook中
// Consumer 不限制函数或者累组件