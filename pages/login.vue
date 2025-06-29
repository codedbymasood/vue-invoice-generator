<script setup lang="ts">
definePageMeta({
  layout: 'full-width',
})

const showForm = ref('login');
const email = ref('')
const password = ref('')
const signUpEmail = ref('')
const signUpPassword = ref('')

const { signIn, signUp } = useAuth();

const handleLogin = async() => {
  await signIn(email.value, password.value);
}

const handleSignUp = async() => {
  await signUp(signUpEmail.value, signUpPassword.value);
}

</script>
<template>
  <div class="vig-container">
    <div class="vig-form-wrapper">
      <div class="vig-login-form" v-show="'login' === showForm">
        <p>Hello Again!</p>
        <input
          v-model="email"
          type="email"
        />
        <input
          v-model="password"
          type="password"
        />
        <button @click="handleLogin">
          Sign In
        </button>
      </div>
      <div class="vig-signup-form" v-show="'signup' === showForm">
        <input
          v-model="signUpEmail"
          type="email"
        />
        <input
          v-model="signUpPassword"
          type="password"
        />
        <button @click="handleSignUp">
          Create an Account
        </button>
      </div>
    </div>
    <p>Don't have an account yet? <span @click="showForm = 'signup'">Sign Up</span></p>
  </div>
</template>
