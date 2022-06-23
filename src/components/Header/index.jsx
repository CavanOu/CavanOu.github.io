import React, { useRef } from 'react'
import { HeaderWrapper } from './style'
import { HeaderNavBar } from './style'
import { HeaderMenu } from './style'
import { DropdownWrapper } from './style'
import { Link, useLocation } from 'react-router-dom'
import { Tabs } from 'antd-mobile'
import { Button, Dropdown } from 'antd-mobile'
import { DownOutline } from 'antd-mobile-icons'
// import { DropdownRef } from 'antd-mobile/es/components/dropdown'
import classnames from 'classnames'
import download from '../../assets/images/common/navOpenApp.png'



export default function Header(props) {
    const { pathname } = useLocation();
    // const ref = useRef < DropdownRef > (null)
    console.log(pathname)
    return (
        <HeaderWrapper>
            <HeaderNavBar className='m-navbar'>
                <Link to="/shouye" className="logo"><i className="iconfont Navbar_logo"></i></Link>
                <div className="right">
                    <Link to="/sousuo" className="search">
                        <i className="iconfont ic_search_tab">
                        </i>
                    </Link>
                    <Link to="/space" className="face">
                        <img className="bfs-img" />
                    </Link>
                    <div className="launch-app-btn m-nav-openapp">
                        <img src={download} className="nav-open-app-img" />
                    </div>
                </div>
            </HeaderNavBar>
            <HeaderMenu>
                <Tabs defaultActiveKey='1' >
                    <Tabs.Tab title={<Link to="/shouye" className={classnames({ active: pathname == '/shouye' })}>
                        <span>首页</span>
                    </Link>}
                        key='1'>
                    </Tabs.Tab>
                    <Tabs.Tab title={<Link to="/donghua" className={classnames({ active: pathname == '/donghua' })}>
                        <span>动画</span>
                    </Link>} key='2'>
                    </Tabs.Tab>
                    <Tabs.Tab title={<Link to="/fanju" className={classnames({ active: pathname == '/fanju' })}>
                        <span>番剧</span>
                    </Link>} key='3'>
                    </Tabs.Tab>
                    <Tabs.Tab title={<Link to="/guochuang" className={classnames({ active: pathname == '/guochuang' })}>
                        <span>国创</span>
                    </Link>} key='4'>
                    </Tabs.Tab>
                    <Tabs.Tab title={<Link to="/yinyue" className={classnames({ active: pathname == '/yinyue' })}>
                        <span>音乐</span>
                    </Link>
                    } key='5'>
                    </Tabs.Tab>
                    <Tabs.Tab title={<Link to="/wudao" className={classnames({ active: pathname == '/wudao' })}>
                        <span>舞蹈</span>
                    </Link>
                    } key='6'>
                    </Tabs.Tab>
                    <Tabs.Tab title={<Link to="/youxi" className={classnames({ active: pathname == '/youxi' })}>
                        <span>游戏</span>
                    </Link>
                    } key='7'>
                    </Tabs.Tab>
                </Tabs>
                <DropdownWrapper>
                    <Dropdown arrow={<DownOutline />}>
                        <Dropdown.Item key='sorter' title=''>
                            <div style={{ padding: 12 }}>
                                <div style={{ 'text-align': 'center', "font-size": "3.73333vw" }}>拉取数据Test</div>
                                <div style={{ 'text-align': 'center', "font-size": "3.73333vw" }}>Test</div>
                                <div style={{ 'text-align': 'center', "font-size": "3.73333vw" }}>真好玩</div>
                            </div>
                            {/* <div style={{ padding: '0 12px 12px' }}>
                                <Button
                                    fill='none'
                                // onClick={() => {
                                //     ref.current?.close()
                                // }}
                                >
                                    
                                </Button>
                            </div> */}
                        </Dropdown.Item>
                    </Dropdown>
                </DropdownWrapper>
            </HeaderMenu>
        </HeaderWrapper>
    )
}
