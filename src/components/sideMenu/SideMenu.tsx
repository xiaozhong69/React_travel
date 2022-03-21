import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { Menu ,Space} from "antd";
import { GifOutlined } from "@ant-design/icons";
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
export const SideMenu: React.FC = () => {
	return (
        <Menu mode="vertical" className={styles["side-menu"]}>
            {sideMenuList.map((m,index)=>
                <SubMenu
                    key={`side-menu-${index}`}
                    title={
                        <span>
                            <Space>
                                <GifOutlined/>
                                {m.title}
                            </Space>
                        </span>
                    }
                >
                    {m.subMenu.map((sm,smindex)=>
                        <SubMenu
                            key={`sub-menu-${smindex}`}
                            title={
                                <span>
                                    <Space>
                                       <GifOutlined/>
                                        {sm.title} 
                                    </Space>
                                </span>
                            }
                        >
                            {sm.subMenu.map((ssm,ssmindex)=>
                                <MenuItem
                                    key={`sub-sub-${ssmindex}`}
                                >
                                    <span>
                                        <Space>
                                            <GifOutlined/>
                                            {ssm}
                                        </Space>
                                    </span>
                                </MenuItem>
                            )}
                        </SubMenu>
                    )}
                </SubMenu>
            )}
        </Menu>
    )
};
