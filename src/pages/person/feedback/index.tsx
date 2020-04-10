import Taro, { Component, Config } from "@tarojs/taro"
import { View, Text, Textarea, Button, Input } from "@tarojs/components"

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
      <View>
        {/* 反馈意见 */}
        <View>
         <Textarea value={this.state.feedBack} />
        </View>

        {/* 联系方式 */}

        <View>
          <Text>联系方式：</Text>
          <Input value={this.state.contact} />
        </View>
        
        <Button>提交</Button>

      </View>
    )
  }
}