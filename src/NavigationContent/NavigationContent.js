import React, { Component, lazy, Suspense } from 'react'
import Classes from './NavigationContent.css';
import Sidenav from '../Sidenav/Sidenav';
import { Route, Redirect, Switch  } from 'react-router-dom';
import SidenavPopup from '../ui-components/SidenavPopup/SidenavPopup';
const Couriers =  lazy(() => import('../DispatchManagement/Couriers/Couriers'));
const ActiveCouriers = lazy(() => import('../DispatchManagement/ActiveCouriers/ActiveCouriers'));
const Messaging = lazy(() => import('../DispatchManagement/Messaging/Messaging'));


// const array = [true, false, true, false, false];
// const checkboxStyle = {
//     borderColor: 'rgb(165, 165, 165)', 
//     backgroundColor: 'white', 
//     activeBackgroundColor: 'blue', 
//     fontColor: 'white', 
//     shadowColor: 'green', 
//     width: '18px', 
//     height: '18px' 
// };
// const check = (e)=> {
//     console.log(e)
// } 


export class NavigationContent extends Component {
    state = {
        openPopup: false,
        popup: ''
    }
    changeRoutInSidenav = (path = '/', search = '', hash = '') => {
        this.props.history.push({
           pathname: path
        })
    }
    openPopup = popup => {
        this.setState({
            openPopup: true,
            popup
        })
    }
    closePopup = () => {
        this.setState({
            openPopup: false
        });
        this.child.checkActiveRout();
    }
    redirectRender = () => {
        setTimeout(() => {
            this.child.checkActiveRout();
        }, 300)
        return (<Redirect to="/couriers" />)
    }
    render() {
        return (
            <div className = {Classes.NavigationContent}>
                <Sidenav pathData = {this.props.location} 
                changeRoutHandler = {this.changeRoutInSidenav}
                openPopup = {this.openPopup}
                ref={instance => { this.child = instance; }}/>
                <div className = {Classes.righrContent}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path = '/customer-support' exact render = {() => (<h1>Page not found</h1>)}/>
                            <Route path = '/couriers' exact component = {Couriers}/>
                            <Route path = '/active-couriers' exact component = {ActiveCouriers}/>
                            <Route path = '/messaging' exact component = {Messaging}/>
                            <Route path = '*'  render = {this.redirectRender}/>
                        </Switch>
                    </Suspense>
                    <SidenavPopup   
                    closePopup = {this.closePopup}
                    openPopup = {this.state.openPopup}
                    popup = {this.state.popup}/>
                </div>
            </div>
        )
    }
}

export default NavigationContent

