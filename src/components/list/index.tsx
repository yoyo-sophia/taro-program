import Taro, { Component } from '@tarojs/taro'
import {ScrollView } from '@tarojs/components'
import './index.less'

interface IState {
  loading: Boolean
}

interface IProps {
  className?: String,
  style?: Object
}

export default class List extends Component<IProps, IState>{
  // 默认加载配置
  static defaultProps = {
    finishedText: "我是有底线的哦",
    errorText: "出错了，重新加载",
    loadingText: "正在拼命加载中..."
  }
  
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  static externalClasses = ['my-class']

  // 监听滚动滚动事件
  onScroll = (e) => {
    console.log(e);
    console.log(this.state.loading);
    
  }
  // 检查list 加载情况

  // 

  render () {
    const { children } = this.props;
    return (
      <ScrollView
        scrollY
        scrollWithAnimation
        scrollTop={0}
        className='index__list my-class'
        onScroll={this.onScroll}
      >
        { children}
      </ScrollView>
    )
  }
}
