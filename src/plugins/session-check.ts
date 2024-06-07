import { definePlugin } from '/@src/app'
import authService from '../backend/auth'

/**
 * Here we are setting up two router navigation guards
 * (note that we can have multiple guards in multiple plugins)
 *
 * We can add meta to pages either by declaring them manualy in the
 * routes declaration (see /@src/router.ts)
 * or by adding a <route> tag into .vue files (see /@src/pages/sidebar/dashboards.ts)
 *
 * <route lang="yaml">
 * meta:
 *   requiresAuth: true
 * </route>
 *
 * <script setup lang="ts">
 *  // TS script
 * </script>
 *
 * <template>
 *  // HTML content
 * </template>
 */
export default definePlugin(async ({ router }) => {
  //   const userSession = useUserSession(pinia)
  //   const $fetch = useFetch()

  //   // 1. Check token validity at app startup
  //   if (userSession.isLoggedIn) {
  //     try {
  //       // Do api request call to retreive user profile.
  //       // Note that the api is provided with json-server
  //       const user = await $fetch('/api/users/me')
  //       userSession.setUser(user)
  //     } catch (err) {
  //       // delete stored token if it fails
  //       userSession.logoutUser()
  //     }
  //   }

  router.beforeEach(async (to, from) => {
    try {
      const res = await authService.getCurrentUser()
      if (to.path === '/' && res) {
        // User is authenticated, allow navigation to '/app'
        return {
          path: '/app',
        }
      }
      //   console.log(res)
    } catch (error) {
      // Handle error if authService.getCurrentUser() fails
      console.error(error)
    }
  })
})
