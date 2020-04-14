import Taro, { Component, Config } from "@tarojs/taro"
import { View, Text, Textarea, Button, Picker } from "@tarojs/components"
import { AtForm, AtInput } from "taro-ui"
import './index.less'

interface IState {
  company: string,
  position: string,
  start_at: string,
  end_at: string,
  content: string

}

interface IProp {
  
}

export default class Index  extends Component<IProp,IState> {

  constructor(props){
    super(props)
    this.state = {
      company: '',
      position: '',
      start_at: '',
      end_at: '',
      content: ''
    }
  }

  config: Config = {
    navigationBarTitleText: '工作简历'
  }

  handleChange = () => {

  }

  onDateChange = e => {
    console.log(e);
    console.log(e.target.value);
  }

  render() {
    return (
      <View className='work-experience'>
        <AtForm>
          <AtInput 
            name='value' 
            title='公司/单位' 
            type='text' 
            placeholder='请输入' 
            value={this.state.company} 
            onChange={this.handleChange.bind(this, 'value')} 
          />
          <AtInput 
            name='value' 
            title='职位/岗位' 
            type='text' 
            placeholder='请输入' 
            value={this.state.position} 
            onChange={this.handleChange.bind(this, 'value')} 
          />
          <View>
            <Text>时间</Text>
            <Picker  
              mode='date' 
              onChange={this.onDateChange} 
              value={this.state.start_at}
            >
              <View className='picker'>
                当前选择：{this.state.start_at}
              </View>
            </Picker>
            <Text>至</Text>
            <Picker 
              mode='date' 
              onChange={this.onDateChange} 
              value={this.state.end_at}
            >
              <View className='picker'>
                当前选择：{this.state.end_at}
              </View>
            </Picker>
          </View>
          <View>
            <Text>工作描述</Text>
            <Textarea value={this.state.content}></Textarea>
          </View>
        </AtForm>
        <View className='btn-wrapper'>
          <Button>返回</Button>
          <Button>保存</Button>
        </View>
      </View>
    )
  }
}