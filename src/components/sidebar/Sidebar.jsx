import { Link } from 'react-router-dom';

import './sidebar.scss';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentIcon from '@mui/icons-material/Payment';
import StoreIcon from '@mui/icons-material/Store';
import { useContext } from 'react';
import { DarkModeContext } from '../context/darkModelContext';

const Sidebar = () =>{

    const{ dispatch } = useContext(DarkModeContext);

    return(
        <div className="sidebar">
            <div className="top">
                <Link to="/" className='link'>
                    <span className="logo">WN 7</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">List</p>
                    <Link to="/users" className='link'>
                        <li>
                            <PersonOutlineOutlinedIcon className='icon'/>
                            <span>User</span>
                        </li>
                    </Link>
                    <Link to='/products/new' className='link'>
                        <li>
                            <StoreIcon className='icon'/>
                            <span>Products</span>
                        </li>
                    </Link>
                    
                    <li>
                        <PaymentIcon className='icon'/>
                        <span>Ordens</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">Useful</p>
                    <li>
                        <AssessmentIcon className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <span>Notificantions</span>
                    </li>
                    <p className="title">Service</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})} ></div>
                <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar;