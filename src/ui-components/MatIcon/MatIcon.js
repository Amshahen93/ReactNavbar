import React from 'react';
import '@material/react-material-icon/dist/material-icon.css';
import MaterialIcon from '@material/react-material-icon';
import Classes from './MatIcon.css';


const MatIcon = props => {
    let iconStyle = {};
    props.size? iconStyle.fontSize = props.size + 'px':  iconStyle.fontSize = '16px';
    props.color? iconStyle.color = props.color: iconStyle.color = 'black';
    iconStyle.fontWeight = '500';
    return (
        <div className = {Classes.MatIcon}>
            <MaterialIcon icon= {props.name} style = {iconStyle}/> 
        </div>
    )
}
export default MatIcon;
