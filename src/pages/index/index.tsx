import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button, Image } from '@tarojs/components'
import { AtIcon, AtInput  } from "taro-ui"
import './index.less'

import banner from '../../assets/img/index/banner.jpg'
import List from '../../components/list/index'
// ts 变量约束
interface IState {
  value: string,
  lists: Array
}
interface IProps {
  // <T>(value:T):T
}
export default class Index extends Component <IProps,IState>{
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      lists: [
        {
          id:1,
          text: "test1"
        },
        {
          id:2,
          text: "test2"
        },
        {
          id:3,
          text: "test3"
        },
        {
          id:4,
          text: "test4"
        },
        {
          id:5,
          text: "test5"
        },
        {
          id:6,
          text: "test6"
        },
        {
          id:7,
          text: "test7"
        },

      ]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  onChange = (e) => {
    console.log(e);
  }

  handleConfirm = (value) => {
    this.setState({
      value
    })
    // 小程序
    return value
  }

  render () {
    const { lists } = this.state;
    return (
      <View className='index-wrapper'>
        {/* Search */}
        <View className='search-bar'>
          <Text>地点</Text>
          <AtInput
            name='value'
            type='text'
            clear
            placeholder='请输入岗位名称' 
            value={this.state.value}  
            onChange={this.onChange}
          />
          <AtIcon prefixClass='icon' value='close' size='20' color='#f9f9f9'></AtIcon>  
        </View>
        {/* banner */}
        <View className='banner__img'>
          <Image src={banner} />
        </View>
        {/* list */}
        <List className='index-list'>
          {
            lists.map(item => {
              return (
                <View key={item.id}>
                  {item.text}
                </View>
              )
            })
          }
        </List>
      </View>
    )
  }
}
