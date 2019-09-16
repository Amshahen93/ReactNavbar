import React, { Component  } from 'react'
import Classes from './Sidenav.css';
import navbarData from './sidenaveData.json';
import Button from '@material-ui/core/Button';
import MatIcon from '../ui-components/MatIcon/MatIcon';
import SidenaveButton from './SidenavButton/SidenavButton';
import Submenu from './Submenu/Submenu';

export default class Sidenav extends Component {
    state = {
        open: false,
        openIndex: 'not',
        activeIndex: []
    }
    data = navbarData;
    sidenavButtonsVariables = {};

    componentDidMount() {
        this.makeSidenaveButtonsVariable();
        this.checkActiveRout();
    }
    makeSidenaveButtonsVariable () {
        // eslint-disable-next-line
        this.data.map((button, index) =>{
            if (button.submenu && button.submenu[0]) {
                this.sidenavButtonsVariables[index] = false;
            }
        })
    }
    navbarOpenOrClose = () => {
        this.setState({
            open: !this.state.open
        });
    }

    checkActiveRout() {
        const url1 = this.props.pathData.pathname.slice(1);
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i].submenu && this.data[i].submenu[0]) {
                for(let j = 0; j<this.data[i].submenu.length; j++) {
                    if(this.data[i].submenu[j].rout === url1){
                        this.sidenavButtonsVariables[i] = true;
                        this.setState({activeIndex: [i, j]});
                    }
                }
            } else {
                if(url1 === this.data[i].rout) {
                    this.setState({activeIndex: [i]});
                }
            }
        }
    }
    clickNavbarButton = (e, data, index, parentIndex) => {
        if (data.submenu && data.submenu[0]) {
            this.sidenavButtonsVariables[index] = !this.sidenavButtonsVariables[index];
            this.state.openIndex === index ?
                this.setState({ openIndex: 'not' }) :
                this.setState({ openIndex: index })
        } else {
            if(data.rout) {
                this.props.changeRoutHandler(data.rout);
            } else {
                this.props.openPopup(data.popup)
            }
            if(data.type === 'menu') {
                this.setState({activeIndex: [index]});
            } else {
                this.setState({activeIndex: [parentIndex, index]});
            }
        }
    }
    render() {
        return (
            <div className={this.state.open ? `${Classes.open} ${Classes.Sidenav}` : Classes.Sidenav} >
                <Button onClick={this.navbarOpenOrClose} className={Classes.openCloseBtn}>
                    <MatIcon name={this.state.open ? 'navigate_before' : 'toc'} size={35} color='#607D8B' />
                </Button>
                {this.data ?
                    this.data.map((menu, index) => {
                        return (
                            <div className={Classes.menuBtnContent} key={index}>
                                <SidenaveButton data={menu}
                                    clickHandler={this.clickNavbarButton}
                                    index={index}
                                    active={
                                        this.sidenavButtonsVariables[index] || 
                                        (this.state.activeIndex.length === 1 && this.state.activeIndex[0] === index)?
                                        'active' : ''} />
                                {menu.submenu ? <Submenu
                                    data={menu.submenu}
                                    open={this.state.open}
                                    index={index}
                                    activeIndex = {this.state.activeIndex}
                                    openIndex={ this.sidenavButtonsVariables[index] }
                                    clickHandler={this.clickNavbarButton} /> :
                                    null}
                            </div>
                        )
                    }) : null}
            </div>
        )
    }
}
