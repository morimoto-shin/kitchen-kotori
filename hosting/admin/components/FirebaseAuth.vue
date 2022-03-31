<template>
  <div id="firebaseui-auth-container" />
</template>

<script>
import * as firebaseui from 'firebaseui-ja'
import { auth, authProviders } from '~/plugins/firebase'

export default {
  name: 'FirebaseAuth',
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        const ui =
          firebaseui.auth.AuthUI.getInstance() ||
          new firebaseui.auth.AuthUI(auth)

        const config = {
          signInOptions: [authProviders.Email],
          callbacks: {
            // Nuxtのローカルサーバーで起こるCORSエラーのためこのように設定。本番環境では不要
            signInSuccessWithAuthResult: () => {
              window.location.href = '/'
              return false // falseを設定するとsignInSuccessUrlにはリダイレクトしない
            },
          },
          signInSuccessUrl: '/',
          signInFlow: 'popup', // ログインフロー設定。Nuxtのローカルサーバーで起こるCORSエラーがあるのでpopupがオススメです。
        }

        ui.start('#firebaseui-auth-container', config)
      }
    })
  },
}
</script>

