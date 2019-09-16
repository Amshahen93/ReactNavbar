import React, {useState} from 'react';
import Classes from './Checkbox.css';
/*
props objects description
_____________________________________________
style: object -> for colors and size checkbox.
style = {
    borderColor: 'some color', 
    backgroundColor: 'some color', 
    activeBackgroundColor: 'some color', 
    fontColor: 'some color', 
    shadowColor: 'some color', 
    width: 'some size', 
    height: 'some size'
} 
______________________________________________
index: number -> for iteration index number
index = some number
______________________________________________
name: string -> some string for ceckbox name
name = 'soem string'
______________________________________________
isChecked: boolean -> params for set is defoult value checked or not.
isChecked = true or false

______________________________________________
data: any -> any data if you whant send in props and it get in click function.
______________________________________________
clickHandler: function -> this function will worcks when you click in checkbox and it has got one param 
param: {
    event: click event,
    checked: boolean,
    index: number,
    name: string,
    data: some data what you need
}
*/

const Checkbox = props => {
    const style = props.style ? props.style: {};
    const [ceckboxData, setClass] = useState({checkboxClasses: [Classes.shadow], checked: props.isChecked, touched: false});
  
    const showShadow = e => {
        if(!e.button){
            setClass({checkboxClasses: [Classes.shadow, Classes.checkboxId], checked: ceckboxData.checked, touched: true});
        }
    }
    const hideShadow = e => {
        if(!e.button){
        setClass({checkboxClasses: [Classes.shadow, Classes.animationAut], checked: !ceckboxData.checked, touched: true});   
        }
    }
    const mouseLeaveHandler = () => {
        if(ceckboxData.touched)
        setClass({checkboxClasses: [Classes.shadow, Classes.animationAut], checked: ceckboxData.checked, touched: false});
    }
    return (
        <div name = 'ceckbox' className = {Classes.Checkbox} 
        onClick = {props.clickHandler? 
            event=> {props.clickHandler({event: Object.assign({}, event), checked: ceckboxData.checked, index: props.index, name: props.name, data: props.data})}:
            ()=> {return false}
        }
        style = {{
            backgroundColor: ceckboxData.checked? style.activeBackgroundColor? style.activeBackgroundColor: '#FF4081':style.backgroundColor? style.backgroundColor: 'white',
            borderColor: ceckboxData.checked? style.borderColor? style.activeBackgroundColor: '#FF4081': style.borderColor? style.borderColor: '#737373',
            width: style.width?  style.width: '16px',
            height: style.height? style.height: '16px'
        }} 
        onMouseDown = {showShadow} onMouseUp = {hideShadow} onMouseLeave = {mouseLeaveHandler}>
            <div  className = {ceckboxData.checkboxClasses.join(' ')} style = {{backgroundColor: style.shadowColor? style.shadowColor: '#FF4081'}} />
            <div className = {ceckboxData.checked? Classes.checkboxCheckedContent: Classes.checkboxNoChecked} 
            style = {{backgroundColor: ceckboxData.checked? style.activeBackgroundColor? style.activeBackgroundColor: '#FF4081': style.backgroundColor? style.backgroundColor: 'white'}}>
                  
            </div>
            <div className = {Classes.bigIcon}>
                <div className = {Classes.checkContent}>
                    <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path fill = {style.fontColor ? style.fontColor : 'white'} d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default Checkbox