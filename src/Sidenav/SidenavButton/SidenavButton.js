import React from 'react';
import Classes from './SidenavButton.css';
import Button from '@material-ui/core/Button';
import MatIcon from '../../ui-components/MatIcon/MatIcon';

const SidenavButton = props => {
    const buttonClasses = [Classes.SidenavButton, Classes[props.data.type], Classes[props.active]];
    return (
        <Button className = {buttonClasses.join(' ')} 
        onClick = {(e) => props.clickHandler ? props.clickHandler(e, props.data, props.index, props.parentIndex) : e.preventDefault() }>
            <div className = {Classes.icon}>
                <div className = {Classes.icon}>
                    <MatIcon name = {props.data.icon} size={30} color={props.data.type === 'menu'? 'white': props.activeIcon ? '#2691BB': '#607D8B'}/>
                </div>
            </div>
            <div className = {Classes.title}>{props.data.name}</div>
        </Button>
    )
}

export default SidenavButton
