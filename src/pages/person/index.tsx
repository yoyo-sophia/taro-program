import Taro, { Component, Config } from "@tarojs/taro"
import { View, Text, Image, Button } from "@tarojs/components"

import defaultAvtar from '../../assets/img/center/default_avatar.jpg'

export default class Index  extends Component {

  config: Config = {
    navigationBarTitleText: '个人中心'
  }

  render() {
    return (
      <View>

        {/* 头部 */}
        <View>
          <Image src={defaultAvtar} />
          <View>
            <Text>未认证</Text>
            <Text>完成认证可提高简历曝光度~</Text>
          </View>
        </View>

        {/* 建立 */}
        <View>
          <View>
            <Text>我的简历</Text>
            <Text>完善简历将有利于提高您的录取率</Text>
            <Button>马上完善</Button>
          </View>
          <View>0%</View>
        </View>

        {/* 报名跟踪 */}
        <View>
          <View>
            <Text>17</Text>
            <Text>已报名</Text>
          </View>
          <View>
            <Text>0</Text>
            <Text>已录用</Text>
          </View>
          <View>
            <Text>0</Text>
            <Text>已到岗</Text>
          </View>
          <View>
            <Text>0</Text>
            <Text>已结算</Text>
          </View>
        </View>

        {/* 其余操作 */}
        <View>
          <View>
            <View>我的钱包</View>
            <View>0元</View>
          </View>

          <View>
            <View>联系客服</View>
            <View>欢迎吐槽</View>
          </View>

          <View>
            <View>意见反馈</View>
            <View></View>
          </View>

        </View>

        {/* 退出解绑 */}

        <Button>推出并解绑</Button>

      </View>
    )
  }
}