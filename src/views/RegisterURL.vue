<template>
  <div class="container ">
    <TopNav />
    <div class="row mt-2">
      <div class="mx-auto col-sm-10 h-50">
        <div class="card">
          <div class="card-header">
            Register URL
          </div>
          <div class="card-body">
            <div class="">
            <div v-if="isLoading" class="alert alert-info text-center">Please wait while we process your request...</div>
            <div v-else-if="responseMessage" class="alert alert-success">
                <pre>{{ formattedResponse }}</pre>
            </div>
            <div v-else class="alert alert-info text-center">Ready to register URLs? Click the button to proceed.</div>
          </div>
            <button @click="registerURLs" class="btn btn-primary text-center w-100" :disabled="isLoading">
                <div v-if="isLoading" class="text-center">
                    <div class="spinner-border spinner-border-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>&nbsp;&nbsp;
                <span > Registering...</span>
                </div>
                <span v-else>Register URL</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
  import TopNav from "@/components/TopNav.vue";
  import { ref, computed } from 'vue';
  import api from '@/axios';


const responseMessage = ref(null);
const isLoading = ref(false);

const registerURLs = async () => {
    isLoading.value = true;
    try {
      const res = await api.post('/register-urls', {});
      console.log(res);
      responseMessage.value = res.data;
    } catch (error) {
      console.error(error);
      responseMessage.value = 'Failed to register URLs';
    } finally {
    isLoading.value = false;
  }
};

const formattedResponse = computed(() => {
    if (responseMessage.value && typeof responseMessage.value === 'object') {
      const { OriginatorCoversationID, ResponseCode, ResponseDescription } = responseMessage.value;
      return `Originator Coversation ID: ${OriginatorCoversationID}\nResponse Code: ${ResponseCode}\nResponse Description: ${ResponseDescription}`;
    }
    return responseMessage.value;
});

</script>

<style scoped>
    .text-center pre {
    white-space: pre-wrap; 
    word-wrap: break-word;
  }
label,.card-header{
    font-weight: bold;
}
</style>
