import React, { Suspense, lazy } from 'react';
import Classes from './SidenavPopup.css';

let openOrClosePopup = false;
const CreateTeam = lazy(() => import('../../DispatchManagement/CreateTeam/CreateTeam'));
const DriverLicenseType = lazy(() => import('../../DispatchManagement/DriverLicenseType/DriverLicenseType'));

const SidenavPopup = props => {
    openOrClosePopup = props.openPopup;
    let Component = null;
    if(props.popup === 'CreateTeam') {
        Component = <CreateTeam/>;
    } else if (props.popup === 'DriverLicenseType') {
        Component = <DriverLicenseType/>;
    } else {
        Component = <h1>Popup not found</h1>
    }
    return (
        <div>
            {
                openOrClosePopup ? 
                <div className = {Classes.Popup} onClick = {props.closePopup}>
                    <Suspense fallback={<div>Loading...</div>}>
                        {Component}
                    </Suspense>
                </div>:
                null
            }
        </div>
    )
}

export default SidenavPopup
