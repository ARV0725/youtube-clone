import React, { useState } from 'react'
import './Navbar.css'
import { Avatar, WhiteLogo } from '../../Assets/ImageIndex'

const Navbar = () => {

    const [isDarktheme, setisDarktheme] = useState(true)
    const [openNav, setopenNav] = useState(false)
    const [Search, setSearch] = useState("")
    const handleSidebar = () => {
        const sidebarContainer = document.getElementById('sidebarContainer')
        sidebarContainer.classList.toggle('close')
    }
  return (
    <div>
        <header>
            <div className='headerDiv'>
                <div>
                    <div className='humburger'>
                        <div onClick={handleSidebar}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <img src={WhiteLogo} alt='Youtube Logo' title='Youtube' />
                </div>
                <div className='searchContainer'>
                    <div className='searchBox'>
                        <input type='text' placeholder='Search' value={Search} onChange={(e) => setSearch(e.target.value)}/>
                        {Search !== "" &&<span className='material-symbols-rounded' onClick={() => setSearch("")}>
                            close
                        </span>}
                    </div>
                    <div className='searchBtn'>
                        <span className='material-symbols-rounded'>
                            search
                        </span>
                    </div>
                    <div className='searchMic'>
                        <span className='material-symbols-rounded active'>
                            mic
                        </span>
                    </div>
                </div>
                <div className='profileContainer'>
                    <span className='material-symbols-rounded'>
                        add_box
                    </span>
                    <span className='material-symbols-rounded'>
                        notifications
                    </span>
                    <img src={Avatar} alt='Your Avatar' title='Hero' onClick={() => setopenNav(!openNav)}/>
                </div>

                {openNav && <div className='profileBtns'>
                    <div className='avatarInfo'>
                        <img src={Avatar} alt='Avatar' title='Avatar' />
                        <p>Hacker</p>
                    </div>
                    <div className='horizontalLine'></div>
                        <div className='profileTabs'>
                            <div className='profileTab'>
                                <span className='material-symbols-rounded'>
                                    account_box
                                </span>
                                <p>Your Channel</p>
                            </div>
                            <div className='profileTab'>
                                <span className='material-symbols-rounded'>
                                    play_circle
                                </span>
                                <p>Youtube Studio</p>
                            </div>
                            <div className='profileTab'>
                                <span className='material-symbols-rounded'>
                                    logout
                                </span>
                                <p>Log Out</p>
                            </div>
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='profileTabs'>
                            <div className='profileTab'>
                            <span className='material-symbols-rounded'>
                                    monetization_on
                                </span>
                                <p>Purchase and Memberships</p>
                            </div>
                            <div className='profileTab'>
                            <span className='material-symbols-rounded'>
                                    admin_panel_settings
                                </span>
                                <p>Your Data on Youtube</p>
                            </div>
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='profileTabs'>
                            { isDarktheme && <div className='profileTab'>
                            <span className='material-symbols-rounded'>
                                    light_mode
                                </span>
                                <p>Light Theme</p>
                            </div>}
                            { !isDarktheme && <div className='profileTab'>
                            <span className='material-symbols-rounded'>
                                    bedtime
                                </span>
                                <p>Dark Theme</p>
                            </div>}
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='profileTabs'>
                            <div className='profileTab'>
                            <span className='material-symbols-rounded'>
                                    help
                                </span>
                                <p> Help</p>
                            </div>
                            <div className='profileTab'>
                            <span className='material-symbols-rounded'>
                                    sms_failed
                                </span>
                                <p>Feedback and Support</p>
                            </div>
                        </div>
                </div>}
            </div>
        </header>
    </div>
  )
}

export default Navbar
