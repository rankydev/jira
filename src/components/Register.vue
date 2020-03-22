<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" lg="10">
          <v-form @submit.prevent="onSignup">
            <v-alert type="error" v-if="error">{{ error.message }}</v-alert>
            <v-text-field
              type="text"
              label="Name"
              v-model="name"
              required
            ></v-text-field>
            <v-text-field
              type="text"
              label="Nachname"
              v-model="lastname"
              required
            ></v-text-field>
            <v-text-field
              type="email"
              label="E-mail"
              v-model="email"
              required
            ></v-text-field>
            <v-text-field
              type="password"
              label="Password"
              v-model="password"
              required
            ></v-text-field>
            <v-text-field
              type="password"
              label="Confirm Password"
              v-model="confirmedPassword"
              :rules="[passwordConfirmation]"
              required
            ></v-text-field>
            <v-btn x-large block class="center primary mt-4" type="submit"
              >Register</v-btn
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
      name: "",
      lastname: "",
      email: "",
      password: "",
      confirmedPassword: ""
    };
  },
  methods: {
    onSignup() {
      this.$store.dispatch("registerUser", this.userData);
    }
  },
  computed: {
    passwordConfirmation() {
      return this.password !== this.confirmedPassword
        ? "Passwords do not match."
        : true;
    },
    userData() {
      return {
        name: this.name,
        lastname: this.lastname,
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
  }
};
</script>

<style lang="scss"></style>
