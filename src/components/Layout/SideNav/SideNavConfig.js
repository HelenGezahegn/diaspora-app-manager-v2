import React from "react";
import {
    HomeOutlined,
    MailOutlined,
    QuestionCircleOutlined,
    SettingOutlined
} from '@ant-design/icons';
import SignOutModal from "../../Auth/SignOut/SignOutModal";

const SCREEN_NAMES = {
    DASHBOARD: "Dashboard", 
    MESSAGES: "Messages", 
    QUESTIONS: "Questions", 
    SETTINGS: "Settings", 
    SIGN_OUT: "Sign out"
};
 
const SIDE_NAV_CONFIG = {
    DASHBOARD: {
        icon: <HomeOutlined />, 
        name: SCREEN_NAMES.DASHBOARD, 
        path: "/dashboard"
    }, 
    MESSAGES: {
        icon: <MailOutlined />, 
        name: SCREEN_NAMES.MESSAGES,
        path: "/messages"
    },
    QUESTIONS: {
        icon: <QuestionCircleOutlined />, 
        name: SCREEN_NAMES.QUESTIONS, 
        path: "/questions"
    }, 
    SETTINGS: {
        icon: <SettingOutlined />,
        name: SCREEN_NAMES.SETTINGS, 
        path: "/settings"
    },
    SIGN_OUT: {
        modal: <SignOutModal />,
    }
};

export {SCREEN_NAMES, SIDE_NAV_CONFIG};