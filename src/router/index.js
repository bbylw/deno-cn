import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Deno 中文文档' }
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    component: () => import('../views/GettingStartedView.vue'),
    meta: { title: '入门指南 - Deno 中文文档' }
  },
  {
    path: '/guides',
    name: 'guides',
    component: () => import('../views/GuidesView.vue'),
    meta: { title: '指南 - Deno 中文文档' }
  },
  {
    path: '/concepts',
    name: 'concepts',
    component: () => import('../views/ConceptsView.vue'),
    meta: { title: '核心概念 - Deno 中文文档' }
  },
  {
    path: '/advanced',
    name: 'advanced',
    component: () => import('../views/AdvancedView.vue'),
    meta: { title: '高级功能 - Deno 中文文档' }
  },
  {
    path: '/reference',
    name: 'reference',
    component: () => import('../views/ReferenceView.vue'),
    meta: { title: '参考文档 - Deno 中文文档' }
  },
  {
    path: '/contributing',
    name: 'contributing',
    component: () => import('../views/ContributingView.vue'),
    meta: { title: '参与贡献 - Deno 中文文档' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Deno 中文文档'
})

export default router
