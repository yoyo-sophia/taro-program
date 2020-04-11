import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'
// eslint-disable-next-line import/first
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/person/index',
      'pages/job/index',
      'pages/person/feedback/index',
      'pages/person/self_evaluation/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '测试',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "assets/img/tabbar/icon-index.png",
          selectedIconPath: "assets/img/tabbar/icon-index-active.png"
        },
        {
          pagePath: "pages/job/index",
          text: "职位",
          iconPath: "assets/img/tabbar/icon-part-time.png",
          selectedIconPath: "assets/img/tabbar/icon-part-time-active.png"
        },
        {
          pagePath: "pages/person/index",
          text: "个人中心",
          iconPath: "assets/img/tabbar/icon-center.png",
          selectedIconPath: "assets/img/tabbar/icon-center-active.png"
        },
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
