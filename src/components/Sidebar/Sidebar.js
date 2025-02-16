import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    const [selectedId, setSelectedId] = useState("home")

    const sideBarData = {
        mainTabs: [
            {
                head: "Home",
                icon: "home"
            },
            {
                head: "Explore",
                icon: "explore"
            },
            {
                head: "Shorts",
                icon: "bolt"
            },
            {
                head: "Subscriptions",
                icon: "subscriptions"
            },
        ],
        externalTabs: [
            {
                head: "Library",
                icon: "video_library"
            },
            {
                head: "History",
                icon: "history"
            },
            {
                head: "Your Videos",
                icon: "smart_display"
            },
            {
                head: "Watch Later",
                icon: "browse_gallery"
            },
            {
                head: "Liked Vides",
                icon: "thumb_up_off"
            },
        ],
        channels: [
            {
                "logo": "https://yt3.ggpht.com/ytc/AKedOLTeIN9o9f6IKqeWT4iszD33W_O03o4-1NIzBo4ODg=s88-c-k-c0x00ffffff-no-rj",
                "name": "CodeWithHarry",
                id: 'CodeWithHarry'
            },
            {
                "logo": "https://yt3.ggpht.com/fh9PW3GdzRaGngR0IDM4cLun7vixMPtOc0Mx-ia-VvR3zsvSNsJaPR2koYMDT1iQgUQNlwXuwg=s88-c-k-c0x00ffffff-no-rj",
                "name": "6 Pack Programmer",
                id: '6PackProgrammer'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AKedOLTBZVVSj01oheKt9M8MtFhxKyy0qPBqzUn9SByvYg=s88-c-k-c0x00ffffff-no-rj",
                "name": "Thapa Technical",
                id: 'ThapaTechnical'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AKedOLQ3Z7pv5rHx8sB1D22KKCWA_kFQ4S3HIUHsxm9jcA=s88-c-k-c0x00ffffff-no-rj",
                "name": "CarryisLive",
                id: 'CarryisLive'
            },
            {
                "logo": "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s176-c-k-c0x00ffffff-no-rj-mo",
                "name": "T-Series",
                id: 'TSeries'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AKedOLTkWeC_ttDb3WmNmQ-qNZWGXA3VR3pSfzTkMeueRA=s88-c-k-c0x00ffffff-no-rj",
                "name": "CarryMinati",
                id: 'CarryMinati'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AKedOLQ8kKijuHJ7kY9prcuIXQ1Aht4yznFzAZe-jleevQw=s88-c-k-c0x00ffffff-no-rj",
                "name": "Zee News",
                id: 'ZeeNews'
            },
        ],
        explore: [
            {
                head: "Films",
                icon: "theaters"
            },
            {
                head: "Gaming",
                icon: "sports_esports"
            },
            {
                head: "Live",
                icon: "sensors"
            },
            {
                head: "Fashion & Beauty",
                icon: "styler"
            },
            {
                head: "Learning",
                icon: "lightbulb"
            },
            {
                head: "Sports",
                icon: "sports_soccer"
            },
        ],
        moreYoutubes: [
            {
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
                "name": "Youtube Premium"
            },
            {
                "logo": "https://img.utdstc.com/icon/da1/075/da10758eb49eee15e14de4b0d4ac121ad41f44878ef403c6f8af704a8d7b4f49:200",
                "name": "Creator Studio"
            },
            {
                "logo": "https://seeklogo.com/images/Y/youtube-music-logo-50422973B2-seeklogo.com.png",
                "name": "Youtube Music"
            },
            {
                "logo": "https://seeklogo.com/images/Y/youtube-kids-logo-40C22D4579-seeklogo.com.png",
                "name": "Youtube Kids"
            },
            {
                "logo": "https://play-lh.googleusercontent.com/HPyYXe-ToibRPGtFd4Ni4gi7RVfpkj4s8HwtC6fhDPqO7JfkF1-ld2SYFdzOQh-9zXU",
                "name": "Youtube TV"
            },
        ],
        settings: [
            {
                head: "Settings",
                icon: "settings"
            },
            {
                head: "Report History",
                icon: "flag"
            },
            {
                head: "Help",
                icon: "help"
            },
            {
                head: "Send Feedback",
                icon: "sms_failed"
            },
        ]
    }
    return (
        <>
            <div className='sidebarSection close' id='sidebarContainer'>
                <div className='miniSidebar' id='miniSidebar'>
                    {sideBarData.mainTabs.map((tab, i) => {
                        return <div key={i} className={`miniSidebarTab ${tab.icon === selectedId && 'active'} `} onClick={() => setSelectedId(tab.icon)}>
                            <span className='material-symbols-rounded'>{tab.icon}</span>
                            <p>{tab.head}</p>
                        </div>
                    })}
                </div>
                <div className='sidebarContainer' id='sidebarContainer'>
                    <div className='sidebarTabs'>
                        <div className='tabContainer'>
                            {sideBarData.mainTabs.map((tab, i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'} `} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className='horizontalLine' style={{ margin: '10px 0' }}></div>
                        <div className='tabContainer'>
                            {sideBarData.externalTabs.map((tab, i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'} `} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className='horizontalLine' style={{ margin: '10px 0' }}></div>
                        <div className='subscriptions'>
                            <h2 className='mainSidebarHead'>Subscriptions</h2>
                            {sideBarData.channels.map((tab, i) => {
                                return <div key={i} className='channelTab'>
                                    <img src={tab.logo} alt={tab.logo} />
                                    <p>{tab.name}</p>
                                </div>
                            })}
                        </div>
                        <div className='horizontalLine' style={{ margin: '10px 0' }}></div>
                        <div className='explore'>
                            <h2 className='mainSidebarHead'>Explore</h2>
                            {sideBarData.explore.map((tab, i) => {
                                return <div key={i} className='sidebarTab'>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className='horizontalLine' style={{ margin: '10px 0' }}></div>
                        <div className='subscriptions'>
                            <h2 className='mainSidebarHead'>Subscriptions</h2>
                            {sideBarData.moreYoutubes.map((tab, i) => {
                                return <div key={i} className='channelTab'>
                                    <img src={tab.logo} alt={tab.logo} />
                                    <p>{tab.name}</p>
                                </div>
                            })}
                        </div>
                        <div className='horizontalLine' style={{ margin: '10px 0' }}></div>
                        <div className='tabContainer'>
                            {sideBarData.settings.map((tab, i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'} `} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className='horizontalLine' style={{ margin: '10px 0' }}></div>
                        <div className='sidebarBottomLinks'>
                            <Link to="/">About</Link>
                            <Link to="/">Press</Link>
                            <Link to="/">CopyRight</Link>
                            <Link to="/">Contact Us</Link>
                            <Link to="/">Creators</Link>
                            <Link to="/">Advertise</Link>
                            <Link to="/">Developers</Link>
                        </div>
                        <div className='sidebarBottomLinks'>
                            <Link to="/">Terms</Link>
                            <Link to="/">Privacy</Link>
                            <Link to="/">Policy &amp; Safety</Link>
                            <Link to="/">How Youtube works</Link>
                            <Link to="/">Test new features</Link>
                        </div>
                        <h3>&copy; Google LLC</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
