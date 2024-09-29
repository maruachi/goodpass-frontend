<script setup>

</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-card width="500">
        <v-card-title align="center" class="text-h5">
          Good Pass 로그인
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
                label="아이디"
                required
            />
            <v-text-field
                label="비밀번호"
                type="password"
                required
            />
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn
              text="로그인"
              color="primary"
              @click="login"
          />

          <v-spacer></v-spacer>

          <v-btn
              text="비밀번호 찾기"
          />
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<style>

</style>