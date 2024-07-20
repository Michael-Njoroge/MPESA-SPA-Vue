<template>
  <div class="container">
    <TopNav />
    <div class="row mt-2">
      <div class="mx-auto col-sm-10">
        <div class="card">
          <div class="card-header">
            Obtain Access Token
          </div>
          <div class="card-body">
            <div class=" mb-3">
              <div v-if="isLoading" class="alert alert-info text-center">Please wait while we process your request...</div>
              <div v-else-if="responseMessage" class="alert alert-success">
                <pre>{{ formattedResponse }}</pre>
              </div>
              <div v-else class="alert alert-info text-center">Click the button to generate a token.</div>
            </div>
            <button 
              @click="getAccessToken" 
              id="getAccessToken" 
              class="btn btn-primary w-100" 
              :disabled="isLoading"
            >
            <div v-if="isLoading" class="text-center">
                    <div class="spinner-border spinner-border-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>&nbsp;&nbsp;
                <span > Generating...</span>
                </div>
                <span v-else>Generate Token</span>
              
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

  const getAccessToken = async () => {
    isLoading.value = true;
    responseMessage.value = null;
    try {
      const res = await api.get('/get-access-token');
      responseMessage.value = res.data;
    } catch (error) {
      console.error(error);
      responseMessage.value = 'Failed to obtain access token';
    } finally {
      isLoading.value = false;
    }
  };

  const formattedResponse = computed(() => {
    if (responseMessage.value && typeof responseMessage.value === 'object') {
      const { access_token, expires_in } = responseMessage.value;
      return `Access Token: ${access_token}\nExpires In: ${expires_in} seconds`;
    }
    return responseMessage.value;
  });
</script>

<style scoped>
  .text-center pre {
    white-space: pre-wrap; 
    word-wrap: break-word;
  }
.card-header{
    font-weight: bold;
}
</style>
