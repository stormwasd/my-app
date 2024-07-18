import React from "react";
import {Button, Layout, theme, Avatar, Dropdown} from "antd";
import './index.css'
import {MenuFoldOutlined} from "@ant-design/icons";

const {Header, Sider, Content} = Layout;

const CommonHeader = () => {
    const logout = () => {

    }
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    个人中心
                </a>
            )
        },
        {
            key: '2',
            label: (
                <a onClick={() => logout} target="_blank" rel="noopener noreferrer">
                    退出
                </a>
            )
        }
    ];
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <Header className="header-container">
            <Button
                type="text"
                // icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                // onClick={() => setCollapsed(!collapsed)}
                icon={<MenuFoldOutlined/>}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff'
                }}
            />
            <Dropdown menu={{items}}>
                <Avatar size={36} src={<img src={require("../../assets/images/user.png")}/>}/>
            </Dropdown>
        </Header>
    )
}

export default CommonHeader;