<script setup lang="ts">
import img009 from '@/assets/images/img009.jpg'
import img010 from '@/assets/images/img010.jpg'
import img011 from '@/assets/images/img011.jpg'
import img012 from '@/assets/images/img012.jpg'
import img013 from '@/assets/images/img013.jpg'

const imgList = [
  { imgUrl: img009 },
  { imgUrl: img010 },
  { imgUrl: img011 },
  { imgUrl: img012 },
  { imgUrl: img013 },
]

const props = defineProps(['id'])
</script>

<template>
  <div class="main">
    <div class="detail">
      <van-nav-bar title="详情" left-arrow fixed>
        <template #right>
          <van-icon name="like" size="24" />
        </template>
      </van-nav-bar>
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in imgList" :key="image.imgUrl">
          <img :src="image.imgUrl" />
        </van-swipe-item>
      </van-swipe>
      <div class="content">
        <h4>经受我这一生的风霜</h4>
        <p class="text">
          万物皆无光 只有你的眼明亮 随心去远方看看太阳 满目皆悲伤 只有你的眉上扬
          等你对饮一碗夜光 来时携风雨 去时带走了四季 你不在再好的风景皆无力
        </p>
        <div class="tags">
          <span>#万物</span>
          <span>#索尼音乐</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.detail {
  .van-swipe {
    height: 390px;
    .van-swipe__track {
      .van-swipe-item {
        display: flex;
        align-items: center;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .content {
    padding: 16px;
    background-color: white;
    font-size: 0.9rem;

    h4,
    p {
      margin: 0;
      line-height: 22px;
    }

    h4 {
      line-height: 26px;
      font-size: 1rem;
    }

    .tags {
      span {
        margin-right: 5px;
      }
    }
  }
}

@media (min-width: 768px) {
  .detail {
    min-height: 100vh;
    width: 70%;
    margin: 0 auto;
    .van-swipe {
      height: 65vh;
      .van-swipe__track {
        .van-swipe-item {
        }
      }
    }

    .content {
      padding: 8px 0;
      font-size: 1rem;

      h4 {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
