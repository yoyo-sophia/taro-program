import Taro, { Component, Config } from '@tarojs/taro'
import {ScrollView, View } from '@tarojs/components'
import './index.less'

interface IState {
  loading: Boolean
}

interface IProps {
  className: String
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

  // 监听滚动滚动事件
  onScroll = (e) => {
    console.log(e);
    console.log(this.state.loading);
    
  }
  // 检查list 加载情况

  // 

  render () {
    const { className, children } = this.props;
    return (
      <ScrollView
        className={`${className} scroll-view`}
        onScroll={this.onScroll}
      >
        {children}
      </ScrollView>
    )
  }
}
