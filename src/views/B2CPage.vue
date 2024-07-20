<template>
  <div class="container">
    <TopNav />
    <div class="row my-4">
      <div class="mx-auto col-sm-8">
        <div class="card">
          <div class="card-header">
            B2C Simulation
          </div>
          <div class="card-body">
            <div class="">
              <div v-if="isLoading" class="alert alert-info text-center">Please wait while we process your request...</div>
              <div v-else-if="responseMessage" class="alert alert-success">
                <pre>{{ formattedResponse }}</pre>
              </div>
              <div v-else class="alert alert-info text-center">Fill the form and click the button to simulate B2C.</div>
            </div>
            <form @submit.prevent="simulateb2c" id="b2c-form">
              <div class="form-group my-2">
                <label for="amount">Amount</label>
                <input v-model="form.amount" type="number" name="amount" required class="form-control">
              </div>
              <div class="form-group my-2">
                <label for="phone">Phone</label>
                <input v-model="form.phone" type="number" name="phone" disabled class="form-control">
              </div>
              <div class="form-group my-2">
                <label for="occasion">Occasion</label>
                <input v-model="form.occasion" type="text" name="occasion" required class="form-control">
              </div>
              <div class="form-group my-2">
                <label for="remarks">Remarks</label>
                <input v-model="form.remarks" type="text" name="remarks" required class="form-control">
              </div>
              <button id="simulateb2c" type="submit" class="btn btn-primary w-100 mt-2" :disabled="isLoading">
                <div v-if="isLoading" class="text-center">
                  <div class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  &nbsp;&nbsp;
                  <span>Submitting...</span>
                </div>
                <span v-else>Simulate Transaction</span>
              </button>
            </form>
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

  const form = ref({
    amount: '',
    phone: 254711822412,
    occasion: '',
    remarks: '',
  });

  const simulateb2c = async () => {
    isLoading.value = true;
    responseMessage.value = null;
    try {
      const res = await api.post('/b2c-simulate', form.value);
      responseMessage.value = res.data;
    } catch (error) {
      console.error(error);
      responseMessage.value = 'Failed to simulate B2C transaction';
    } finally {
      isLoading.value = false;
    }
  };

  const formattedResponse = computed(() => {
    if (responseMessage.value && typeof responseMessage.value === 'object') {
      const { ConversationID, OriginatorConversationID, ResponseCode, ResponseDescription } = responseMessage.value;
      return `Conversation ID: ${ConversationID}\nOriginator Conversation ID: ${OriginatorConversationID}\nResponse Code: ${ResponseCode}\nResponse Description: ${ResponseDescription}`;
    }
    return responseMessage.value;
  });
</script>

<style scoped>
  .text-center pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>
