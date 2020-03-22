<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" lg="10">
          <v-form>
            <v-text-field type="text" label="Name" required></v-text-field>
            <v-text-field type="text" label="Nachname" required></v-text-field>
            <v-text-field type="email" label="E-mail" required></v-text-field>
            <v-text-field
              type="password"
              label="Password"
              required
            ></v-text-field>
            <v-text-field
              type="password"
              label="Confirm Password"
              required
            ></v-text-field>
            <v-btn x-large block class="center primary mt-4" @click="submit"
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
      password2: ""
    };
  },
  methods: {
    submit() {
      console.log("hello");
    }
  }
};
</script>

<style lang="scss"></style>
