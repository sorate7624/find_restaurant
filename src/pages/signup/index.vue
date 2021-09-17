<template>
  <div class="mt-4">
    <div>Sign up page</div>
    <b-form @submit.prevent="submitForm">
      <b-form-group label="Name:">
        <b-form-input v-model="form.name" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group label="Email address:">
        <b-form-input v-model="form.email" type="email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:">
        <b-form-input type="password" v-model="form.password" required></b-form-input>
      </b-form-group>

      <b-form-group label="Confirm Password:">
        <b-form-input type="password" v-model="form.passwordConfirm" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Sign Up</b-button>
    </b-form>
  </div>
</template>

<script>
  import {
    registerUser
  } from '@/api/index';

  export default {
    data() {
      return {
        form: {
          name: 'pang',
          email: 'pang@pang.com',
          password: '1234',
          passwordConfirm: '1234',
        }
      }
    },
    methods: {
      async submitForm() {
        // API 요청시 전달할 userData 객체
        const userData = {
          name: this.name,
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm,
        };
        const {
          data
        } = await registerUser(userData).then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error.response)
          });

        this.logMessage = `${data.username} 님이 가입되었습니다.`;

        // 가입 후 폼 초기화
        this.initForm();
      },
      initForm() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.passwordConfirm = '';
      },
    }
  }
</script>