import React from 'react'
import Classes from './Submenu.css';
import SidenaveButton from '../SidenavButton/SidenavButton';

const Submenu = props => {
    const submenuStyle = {
        height: props.openIndex? props.data.length*50 + 'px': '0px',
        transition: 'height ease ' +  (0.3 + props.data.length*0.05 + 's')
    }

    return (
        <div className = {Classes.Submenu} style = {submenuStyle}>
            <div className = {Classes.tultipContent}>
                <div className = {Classes.tultip} style = {{left: props.open? '221px': '21px'}}></div>
            </div>
            {props.data.map((buttonData, index) => {
                return(
                <SidenaveButton key = {index} 
                data = {buttonData} 
                clickHandler = {props.clickHandler} 
                index = {index} 
                parentIndex = {props.index} 
                activeIcon = {props.index === props.activeIndex[0] && index === props.activeIndex[1]}
                active = ''/>)
            })}
               
        </div>
    )
}

export default Submenu
