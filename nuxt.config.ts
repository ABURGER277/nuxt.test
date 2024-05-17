// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt최신 버전은 더이상 vuex storemanagement를 제공하지 않는다. 때문에 이 프로젝트에서는
// store관리를 넉스트에서 공식문서에서 제공하는 'pinia' 모듈을 통해서 vuex와 비슷한 문법으로 store를 관리한다.
// npx nuxi@latest module add pinia

//nuxt2.X 까지는 export default({})를 통해 coinfig를 작성하였다.
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
})
