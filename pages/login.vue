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

  // Fetch the invoice data, saved it in store
}

const handleSignUp = async() => {
  await signUp(signUpEmail.value, signUpPassword.value);
}

</script>
<template>
  <div class="flex justify-center items-center h-screen">
    <div class="vig-form-wrapper border border-black rounded-lg p-8">
      <div class="vig-form-inner">
        <div class="vig-login-form" v-show="'login' === showForm">
          <p>Hello Again!</p>
          <label class="block">
            Email
            <input
              v-model="email"
              type="email"
            />
          </label>
          <label class="block">
            Password
            <input
              v-model="password"
              type="password"
            />
          </label>
          
          <button @click="handleLogin">
            Sign In
          </button>          
          <p>Don't have an account yet? <span @click="showForm = 'signup'">Sign Up</span></p>
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
          
          <p>Back to <span @click="showForm = 'login'">Login</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
input {
  border: 1px solid #000;
  border-radius: 4px;
}
</style>
