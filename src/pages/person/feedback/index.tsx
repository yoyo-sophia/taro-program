import Taro, { Component, Config } from "@tarojs/taro"
import { View, Text, Textarea, Button, Input } from "@tarojs/components"
import './index.less'
interface IState {
  contact: string,
  feedBack: string
}

interface IProp {
  
}

export default class Index  extends Component<IProp,IState> {

  constructor(props){
    super(props)
    this.state = {
      contact: '',
      feedBack: ''
    }
  }

  config: Config = {
    navigationBarTitleText: '意见反馈'
  }

  render() {
    return (
      <View className='feedback'>
        {/* 反馈意见 */}
        <View className='m-t-25'>
         <Textarea placeholder='请输入您的反馈信息' className='feedback__content' value={this.state.feedBack} />
        </View>

        {/* 联系方式 */}

        <View className='contact m-t-25'>
          <Text>联系方式：</Text>
          <Input placeholder='请输入您的邮箱/微信号' value={this.state.contact} />
        </View>
        
        <Button className='btn-submmit'>提交</Button>

      </View>
    )
  }
}