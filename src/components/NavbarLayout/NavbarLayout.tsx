import React from 'react';
import logo from '../../assets/titan_logo.svg'
import './NavbarLayout.css'
import { NavLink, Outlet } from 'react-router-dom'
import Time from '../DateTime/Time';
import Date from '../DateTime/Date';


const NavbarLayout = () => {

    return (
        <div>
            <div className='header'>
                <div>
                    <img src={logo}></img>
                    <div>
                        <Time />
                        <Date />
                    </div>
                </div>

                <div className='navigator-links'>
                    <NavLink to={'/'} className={({isActive}) => isActive ? 'navigator-link-active' : ''}>
                        <img src='/src/assets/icons/house.svg'></img>
                    </NavLink>
                    <NavLink to={'/data'} className={({isActive}) => isActive ? 'navigator-link-active' : ''}>
                        <img src='/src/assets/icons/table.svg'></img>
                    </NavLink>
                    <NavLink to={'/weather'} className={({isActive}) => isActive ? 'navigator-link-active' : ''}>
                        <img src='/src/assets/icons/cloud.svg'></img>
                    </NavLink>
                    <NavLink to={'/cams'} className={({isActive}) => isActive ? 'navigator-link-active' : ''}>
                        <img src='/src/assets/icons/camera-cctv.svg'></img>
                    </NavLink>
                    <NavLink to={'/security'} className={({isActive}) => isActive ? 'navigator-link-active' : ''}>
                        <img src='/src/assets/icons/shield-blank.svg'></img>
                    </NavLink>
                    <NavLink to={'/calendar'} className={({isActive}) => isActive ? 'navigator-link-active' : ''}>
                        <img src='/src/assets/icons/calendar.svg'></img>
                    </NavLink>
                    <NavLink to={'/alarm'} className={({isActive}) => isActive ? 'navigator-link-active' : ''}>
                        <img src='/src/assets/icons/alarm-clock.svg'></img>
                    </NavLink>
                    <NavLink to={'/messanger'} className={({isActive}) => isActive ? 'navigator-link-active' : ''}>
                        <img src='/src/assets/icons/message.svg'></img>
                    </NavLink>
                    <NavLink to={'/notes'} className={({isActive}) => isActive ? 'navigator-link-active' : ''}>
                        <img src='/src/assets/icons/note.svg'></img>
                    </NavLink>
                </div>

                <div className='navigator-left-body'>
                    <div className='system-state'>
                        <span>System state</span>
                        <span style={{color: '#3CAC39'}}>Optimal</span>
                    </div>
                    <div className='navigator-other-links'>
                        <NavLink to={'/'}>
                            <img src='/src/assets/icons/gear.svg'></img>
                        </NavLink>
                        <NavLink to={'/'}>
                            <img src='/src/assets/icons/bell.svg'></img>
                        </NavLink>
                        <NavLink to={'/'} className='navigator-avatar'>
                            <img src='/src/assets/testava.png'></img>
                        </NavLink>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default NavbarLayout;