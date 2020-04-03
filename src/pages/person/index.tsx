import Taro, { Component } from "@tarojs/taro"
import { Swiper, SwiperItem, View } from "@tarojs/components"

export default class Index  extends Component {
  render() {
    return (
      <View>
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          autoplay
        >
          <SwiperItem>
            <View>1</View>
          </SwiperItem>
          <SwiperItem>
            <View>2</View>
          </SwiperItem>
          <SwiperItem>
            <View>3</View>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}