import { UserAddOutlined, DollarCircleFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
// import 'antd/dist/antd.min.css';
import './navbar.css'
import React, { useState } from 'react';
import logo from './../../assets/static/kyc_logo.png';
import {
    FaFacebookSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom';

const items: MenuProps['items'] = [
    {
        label: <div className="logo">
            <div className={"logo-icon"} >
                {/*<AppleOutlined className={"svg-logo"} />*/}
                <img src={logo} alt="Logo" />
                {/*<Link to="/">KYC2</Link>*/}
            </div>
            <div className={"logo-title"}>
                <Link to="/"></Link>
            </div>
        </div>,
        key: 'kyc',
    }

];

const socialItems: MenuProps['items'] = [
    // {
    //     label: <div className="logo">
    //         <div className={"logo-icon"} >
    //             {/*<AppleOutlined className={"svg-logo"} />*/}
    //             <img src={logo} alt="Logo" />
    //         </div>
    //         <div className={"logo-title"}>
    //             <Link to="/">KYC</Link>
    //         </div>
    //     </div>,
    //     key: 'kyc',
    // },
    // {
    //     label: 'Empty',
    //     key: 'empty',
    // },
    // {
    //     label: <div className={"empty"}>Empty</div>,
    //     key: 'empty',
    // },
    {
        label: <a href="https://t.me/joinkyc" target="_blank" rel="noopener noreferrer"> Join </a>,
        key: 'mail',
        icon: <UserAddOutlined />
    },
    {
        label: <Link to="/donate">Donate</Link>,
        key: 'donate',
        icon: <DollarCircleFilled />,
    },
    // {
    //     label: <a href="https://kycgym.com/" target="_blank">
    //         Gym
    //     </a> ,
    //     key: 'gym',
    //     icon: <EnvironmentFilled />,
    // },
    {
        label: <a href="https://www.facebook.com/kamalyuvaclubindia" target="_blank" rel="noopener noreferrer">
            Facebook
        </a>,
        key: 'kyc-facebook',
        icon: <FaFacebookSquare />
    },
    {
        label: <a href="https://www.youtube.com/c/kycacademy" target="_blank" rel="noopener noreferrer">
            Youtube
        </a>,
        key: 'kyc-youtube',
        icon: <FaYoutubeSquare />,
    }
];

const Navbar: React.FC = () => {
    // const navigate = useNavigate()
    const [current, setCurrent] = useState('kyc');

    const onClickMenu: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
        // navigate(e.key)
    };

    return <div className={"testDiv"}>
        <div className={"menu-navbar-list"}>
            <Menu onClick={onClickMenu} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
        {/*<div className={"logo-icon"} >*/}
        {/*    /!*<AppleOutlined className={"svg-logo"} />*!/*/}
        {/*    <img src={logo} alt="Logo" />*/}
        {/*</div>*/}
        <div className={"social-navbar-list"}>
            <Menu onClick={onClickMenu} selectedKeys={[current]} mode="horizontal" items={socialItems} />
        </div>
    </div>
};

export default Navbar;