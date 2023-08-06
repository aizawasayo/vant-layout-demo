import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('@/components/Home.vue')
const Demo = () => import('@/components/Demo.vue')
const Detail = () => import('@/components/Detail.vue')

const routes = [
  { path: '/', component: Demo },
  { path: '/demo', component: Home },
  {
    path: '/detail',
    component: Detail,
    props: route => ({ id: route.query.id }),
  },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
