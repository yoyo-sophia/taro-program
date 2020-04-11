import Taro, { Component, Config } from "@tarojs/taro"
import { View, Text, Textarea, Button } from "@tarojs/components"
import './index.less'

interface IState {
  content: string,
}

interface IProp {
  
}

export default class Index  extends Component<IProp,IState> {

  constructor(props){
    super(props)
    this.state = {
      content: ''
    }
  }

  config: Config = {
    navigationBarTitleText: '自我评价'
  }

  render() {
    return (
      <View className='self-evaluation'>
        {/* 自我评价内容 */}
        <View className='content-wrapper'>
          <Text className='self__title'>自我评价</Text>
         <Textarea 
           placeholder='可填写相关个人评价，如性格、爱好、特长' 
           className='self__content' 
           value={this.state.content} 
         />
        </View>

        {/* 按钮 */}
        <View className='btn-wrapper'>
          <Button>返回</Button>
          <Button>提交</Button>
        </View>

      </View>
    )
  }
}