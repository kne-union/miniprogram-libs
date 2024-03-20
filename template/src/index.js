import React from 'react';
import {View} from "@tarojs/components";
import style from './style.module.scss';

const <%=templateLibs.camelCase(name)%> = () => {
    return <View className={style['tips']}>unleash creativity</View>;
};

export default <%=templateLibs.camelCase(name)%>;
