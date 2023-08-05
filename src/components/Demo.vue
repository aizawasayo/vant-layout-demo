<template>
  <div class="list-demo">
    <van-nav-bar title="标题" left-arrow fixed>
      <template #right>
        <van-icon name="search" size="24" />
      </template>
    </van-nav-bar>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="list-box">
        <div class="list-item" v-for="(item, ing) of imgList" :key="ing">
          <van-image :src="item.imgUrl" fit="cover" lazy-load />
          <p class="content">
            {{ item.text }}
          </p>

          <div class="author">
            <van-image :src="item.author.avatar" round />
            <span>{{ item.author.name }}</span>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import img001 from '@/assets/images/img001.jpg'
import img002 from '@/assets/images/img002.jpg'
import img003 from '@/assets/images/img003.jpg'
import img004 from '@/assets/images/img004.jpg'
import img005 from '@/assets/images/img005.jpg'
import img006 from '@/assets/images/img006.jpg'
import img007 from '@/assets/images/img007.jpg'
import img008 from '@/assets/images/img008.jpg'
import img009 from '@/assets/images/img009.jpg'
import img010 from '@/assets/images/img010.jpg'
import img011 from '@/assets/images/img011.jpg'
import img012 from '@/assets/images/img012.jpg'
import img013 from '@/assets/images/img013.jpg'
import img014 from '@/assets/images/img014.jpg'
import img015 from '@/assets/images/img015.jpg'
import img016 from '@/assets/images/img016.jpg'
import img017 from '@/assets/images/img017.jpg'
import img018 from '@/assets/images/img018.jpg'
import img019 from '@/assets/images/img019.jpg'
import img020 from '@/assets/images/img020.jpg'
import img021 from '@/assets/images/img021.jpg'
import img022 from '@/assets/images/img022.jpg'
import img023 from '@/assets/images/img023.jpg'
import img024 from '@/assets/images/img024.jpg'

const loading = ref(false)
const finished = ref(false)
const imgList = ref([
  {
    imgUrl: img001,
    text: '城市天际线1号城市天际线1号城市天际线1号城市',
    author: { name: 'author 111', avatar: img002 },
  },
  {
    imgUrl: img003,
    text: '城市天际线2号',
    author: { name: 'author 2', avatar: img004 },
  },
  {
    imgUrl: img005,
    text: '城市天际线3号',
    author: { name: 'author 333', avatar: img006 },
  },
  {
    imgUrl: img007,
    text: '城市天际线1号城市天际线1号城市天际线1号城市',
    author: { name: 'author 111', avatar: img008 },
  },
  {
    imgUrl: img009,
    text: '城市天际线2号',
    author: { name: 'author 2', avatar: img010 },
  },
  {
    imgUrl: img011,
    text: '城市天际线3号',
    author: { name: 'author 333', avatar: img012 },
  },
])

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      var listBox = imgList.value[0]
      imgList.value.push(listBox)
    }

    // 加载状态结束
    loading.value = false
    // 数据全部加载完成
    if (imgList.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}
</script>
<style lang="less" scoped>
.list-demo {
  background-color: #eff2f5;
  padding: 56px 8px 16px;

  .list-box {
    column-count: 2;
    column-gap: 8px;

    .list-item {
      -webkit-column-break-inside: avoid;
      break-inside: avoid;
      margin-bottom: 8px;
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      font-size: 0.8rem;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

      .van-image {
        width: 100%;
        height: 171px;
      }

      .content {
        padding: 0 8px;
        color: #333;
        margin: 0;
      }

      .author {
        padding: 4px 8px;
        display: flex;
        align-items: center;
        // font-size: 12px;
        color: grey;

        .van-image {
          margin-right: 8px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }

        span {
          flex: 1;
          display: block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .list-demo {
    padding: 32px 8px 16px;

    .list-box {
      column-count: 3;
      .list-item {
        .van-image {
          height: 235px;
        }
        .content {
          font-size: 1rem;
        }

        .author {
          span {
            font-size: 1rem;
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .list-demo {
    padding: 32px 8px 16px;

    .list-box {
      column-count: 3;

      .list-item {
        .content {
          font-size: 1rem;
        }
      }
    }
  }
}

// .van-list-_loading {
//   clear: both;
// }
</style>
