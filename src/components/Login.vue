<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" lg="10">
          <v-form @submit.prevent="onSignin">
            <v-alert type="error" v-if="error">{{ error.message }}</v-alert>
            <v-text-field
              :type="email"
              label="E-mail"
              v-model="email"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              required
            ></v-text-field>
            <v-btn x-large block class="center primary mt-4" type="submit"
              >Login</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    userData() {
      return {
        email: this.email,
        password: this.password
      };
    },
    user() {
      return this.$store.getters.getUser;
    },
    error() {
      return this.$store.getters.getError;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("dashboard");
      }
    }
  },
  methods: {
    onSignin() {
      this.$store.dispatch("loginUser", this.userData);
    }
  }
};
</script>

<style lang="scss"></style>
