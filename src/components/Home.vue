<script setup lang="ts">
import type { ConfigProviderThemeVars } from 'vant'
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

const imgList = [
  {
    author: { name: 'author 111', avatar: img002 },
    text: 'What a mess',
    src: img001,
  },
  {
    author: { name: 'author 222', avatar: img004 },
    text: 'What a mess What a mess What a mess',
    src: img003,
  },
  {
    author: { name: 'author 3333333333333', avatar: img006 },
    text: 'What a mess',
    src: img005,
  },
  {
    author: { name: 'author 444', src: img008 },
    text: 'What a mess',
    src: img007,
  },
  {
    author: { name: 'author 555', avatar: img010 },
    text: 'What a mess What a mess What a mess What a mess What a mess',
    src: img009,
  },
  {
    author: { name: 'author 666', avatar: img012 },
    text: 'What a mess',
    src: img011,
  },
  {
    author: { name: 'author 777', avatar: img014 },
    text: 'What a mess',
    src: img013,
  },
  {
    author: { name: 'author 8888888888', avatar: img016 },
    text: 'What a mess',
    src: img015,
  },
  {
    author: { name: 'author 999', avatar: img018 },
    text: 'What a mess',
    src: img017,
  },
  {
    author: { name: 'author 101010', avatar: img020 },
    text: 'What a mess',
    src: img019,
  },
  {
    author: { name: 'author 1111111', avatar: img022 },
    text: 'What a mess',
    src: img021,
  },
  {
    author: { name: 'author 121212', avatar: img024 },
    text: 'What a mess',
    src: img023,
  },
]
const themeVars: ConfigProviderThemeVars = {
  gridItemContentPadding: '0',
}
</script>

<template>
  <div class="layout-demo">
    <van-nav-bar title="标题" left-arrow fixed>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-config-provider :theme-vars="themeVars">
      <van-grid
        :gutter="16"
        :column-num="3"
        class="layout-grid"
        :center="false"
      >
        <van-grid-item
          v-for="(item, i) in imgList"
          :key="i"
          class="layout-item"
        >
          <van-image :src="item.src" height="171" />
          <div class="text">
            <p>{{ item.text }}</p>
            <div class="author">
              <van-image
                :src="item.author.avatar"
                width="24"
                height="24"
                radius="12"
              />
              <span>{{ item.author.name }}</span>
            </div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-config-provider>
  </div>
</template>

<style lang="less" scoped>
.layout-demo {
  padding-top: 56px;
  background-color: lightcyan;

  .layout-grid {
    .layout-item {
      overflow: hidden;

      .van-grid-item {
        border-radius: 8px !important;

        .van-grid-item__content {
          border-radius: 8px !important;
        }
      }
      .van-grid-item__content {
        background-color: white;
        border-radius: 8px !important;

        .van-image {
          width: 100%;
        }

        .text {
          width: 100%;
          p {
            padding: 4px 8px 0 8px;
            margin: 0;
            font-size: 12px;
            text-align: left;
            line-height: 15px;
          }
          .author {
            padding: 4px 8px 4px 8px;
            width: 100%;
            display: flex;
            align-items: center;
            font-size: 12px;
            color: grey;

            .van-image {
              margin-right: 8px;
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
  }
}
</style>
