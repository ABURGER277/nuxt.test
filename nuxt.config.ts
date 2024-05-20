// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt최신 버전은 더이상 vuex storemanagement를 공식적으로 제공하지 않는다.
// 넉스트에서 store관리는 공식문서에서 권장하는 'pinia' 모듈을 통해 vuex와 비슷한 문법으로 store를 관리한다.

export default defineNuxtConfig({
  css: ['~/assets/main.css'],
})
