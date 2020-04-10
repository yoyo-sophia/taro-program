import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import { AtIcon, AtInput, AtSearchBar   } from "taro-ui"
import './index.less'

import banner from '../../assets/img/index/banner.jpg'
import List from '../../components/list/index'

// 导航Icon Image
import hot from '../../assets/img/index/icon-hot.png';
import nearby from '../../assets/img/index/icon-nearby.png';
import newest from '../../assets/img/index/icon-newest.png';
import vacation from '../../assets/img/index/icon-vacation.png';

// ts 变量约束
interface IlistObject {
  id: Number,
  text: String
}
interface IState {
  value: string,
  lists: Array<IlistObject>
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
        {
          id:7,
          text: "test7"
        },
        {
          id:7,
          text: "test7"
        },
        {
          id:7,
          text: "test7"
        },
        {
          id:7,
          text: "test7"
        },
        {
          id:7,
          text: "test7"
        }
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
          <Text className='search__location'>地点</Text>
          <Input
            className='search__item'
            name='value'
            type='text'
            placeholder='请输入岗位名称' 
            value={this.state.value}  
            onChange={this.onChange}
          />
        </View>

        {/* 导航栏 */}
        <View className='index-type'>
          <View>
            <Image src={hot} />
            <Text className='f-24'>热招兼职</Text>
          </View>

          <View>
            <Image src={nearby} />
            <Text className='f-24'>离我最近</Text>
          </View>

          <View>
            <Image src={newest} />
            <Text className='f-24'>暑期实习</Text>
          </View>

          <View>
            <Image src={vacation} />
            <Text className='f-24'>最新职位</Text>
          </View>
          
        </View>

        {/* banner */}
        <View className='banner__img'>
          <Image src={banner} />
        </View>

        {/* list */}
          <List 
            my-class='index__list'
          >
            {
              lists.map((item,index) => {
                return (
                  <View key={index}> 
                    {item.text} 
                  {item.text}
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
