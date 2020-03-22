<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" lg="10">
          <v-form>
            <v-text-field :type="email" label="E-mail" required></v-text-field>
            <v-text-field
              :type="password"
              label="Password"
              required
            ></v-text-field>
            <v-btn class="center" @click="submit">Login</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
