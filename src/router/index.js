import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import CreatePost from '@/components/CreatePost'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/post',
      name: 'CreatePost',
      component: CreatePost,
      meta: {
        requiresAuth: true,
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = firebase.auth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAutenticated = auth.currentUser;
  console.log(auth.currentUser);
  if (requiresAuth && !isAutenticated) {
    next('/login');
  } else if (!requiresAuth && isAutenticated) {
    next('/home');
  } else {
    next();
  }
});
export default router;
