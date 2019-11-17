import Vue from 'vue'
import Router from 'vue-router'
import Recommemd from 'components/recommend/recommend'//推荐页面
import Search from 'components/search/search' //搜索页面
import Rank  from 'components/rank/rank' //排行页面
import Singer from 'components/singer/singer'//歌手页面
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path:'/recommend',
      component:Recommemd
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/singer',
      component:Singer
    }
  ]
})
