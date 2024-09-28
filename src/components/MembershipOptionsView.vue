<script>
import {useRoute} from "vue-router";
import {onMounted, reactive, ref} from "vue";
import getMembershipOption from "@/api/api";


export default {
  setup() {
    const route = useRoute();
    const businessId = ref(route.params.businessId);
    let membershipOptions = reactive([]);
    onMounted(async ()=>{
      membershipOptions.push(...await getMembershipOption(businessId.value));
      console.log(membershipOptions);
    })
    return {
      businessId,
      membershipOptions
    }
  }
}

</script>

<template>
  <v-list lines="one">
    <v-list-item
        v-for="(membershipOption, index) in membershipOptions"
        :key="index"
    >
      <v-btn variant="tonal">
        {{membershipOption.membershipTypeName}}
      </v-btn>
    </v-list-item>

  </v-list>

</template>

<style scoped>

</style>