<script setup>

</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="4">
        <v-text-field
            hint="아이디를 입력해주세요."
            label="아이디"
            type="input"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="4">
        <v-text-field
            hint="비밀번호를 입력해주세요."
            label="비밀번호"
            type="password"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="4" align="end">
        <v-btn class="mr-2" color="primary">로그인</v-btn>
        <v-btn color="primary">비밀번호 찾기</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>

</style>