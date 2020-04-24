// 用类的形式创建组件,还有hook形式
import React from 'react'
import Home from './home.jsx'
import MyNav from './myNav.jsx'

import StateComponent from './stateComponent.jsx'
class App extends React.Component{
    // 渲染函数
    render() {
        // 在render函数中定义变量
        const nav1 = ['web', 'js', 'java']
        const nav2 = ['首页', '学习', '视频']
        return (
            <div>
                <h1>hello react</h1>
                <Home/>
                <MyNav nav = { nav1 } title="导航1"/>
                <MyNav nav = { nav2 } title="导航2"/>
                <StateComponent/>
            </div>
        )
    }
}

export default App
