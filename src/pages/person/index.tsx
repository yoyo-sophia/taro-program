import Taro, { Component, Config } from "@tarojs/taro"
import { View, Text, Image, Button } from "@tarojs/components"

import './index.less'
import defaultAvtar from '../../assets/img/center/default_avatar.png'

export default class Index  extends Component {

  config: Config = {
    navigationBarTitleText: '个人中心'
  }

  render() {
    return (
      <View className='person-center'>

        {/* 头部 */}
        <View className='header'>
          <Image src={defaultAvtar} />
          <View className='header__tip'>
            <text>未认证</text>
            <text>完成认证可提高简历曝光度~</text>
          </View>
        </View>

        {/* 建立 */}
        <View className='resume'>
          <View className='resume__text'>
            <View className='resume__title'>我的简历</View>
            <View className='resumme__tip'>完善简历将有利于提高您的录取率</View>
            <Button className='resume__btn'>马上完善</Button>
          </View>
          <View className='resume__progress'>0%</View>
        </View>

        {/* 报名跟踪 */}
        <View className='trail'>
          <View className='title'>报名跟踪</View>
          <View className='trail-list'>
            <View className='trail__data'>
              <Text>17</Text>
              <Text>已报名</Text>
            </View>
            <View className='trail__data'>
              <Text>0</Text>
              <Text>已录用</Text>
            </View>
            <View className='trail__data'>
              <Text>0</Text>
              <Text>已到岗</Text>
            </View>
            <View className='trail__data'>
              <Text>0</Text>
              <Text>已结算</Text>
            </View>
          </View>
        </View>

        {/* 其余操作 */}
        <View className='operation'>
          <View className='operation__item'>
            <View>
              <Text className='item__name'>我的钱包</Text>
            </View>
            <View className='item__right'>0元</View>
          </View>

          <View className='operation__item'>
            <View>
              <Text className='item__name'>联系客服</Text>
            </View>
            <View className='item__right'>欢迎吐槽</View>
          </View>

          <View className='operation__item'>
            <View>
              <Text className='item__name'>意见反馈</Text>
            </View>
            <View className='item__right'></View>
          </View>

        </View>

        {/* 退出解绑 */}

        <View className='btn-exit'>退出并解绑</View>

      </View>
    )
  }
}