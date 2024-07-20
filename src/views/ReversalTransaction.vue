<template>
  <div class="container">
    <TopNav />
    <div class="row my-4">
      <div class="mx-auto col-sm-8">
        <div class="card">
          <div class="card-header">
            Reverse Transaction
          </div>
          <div class="card-body">
            <div class="">
              <div v-if="isLoading" class="alert alert-info text-center">Please wait while we process your request...</div>
              <div v-else-if="responseMessage" class="alert alert-success">
                <pre>{{ formattedResponse }}</pre>
              </div>
              <div v-else class="alert alert-info text-center">Fill the form and click the button to reverse transaction.</div>
            </div>
            <form @submit.prevent="reverseTransaction" id="stk-form">
              <div class="form-group my-2">
                <label for="transactionid">Transaction Id</label>
                <input v-model="form.transactionid" type="text" name="transactionid" class="form-control" required>
              </div>
              <div class="form-group my-2">
                <label for="amount">Amount</label>
                <input v-model="form.amount" type="number" name="amount" class="form-control" required>
              </div>
              <button id="simulatestk" type="submit" class="btn btn-primary w-100 mt-2" :disabled="isLoading">
                <div v-if="isLoading" class="text-center">
                  <div class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  &nbsp;&nbsp;
                  <span>Submitting...</span>
                </div>
                <span v-else>Reverse Transaction</span>
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
    transactionid: '',
    amount: '',
  });

  const reverseTransaction = async () => {
    isLoading.value = true;
    responseMessage.value = null;
    try {
      const res = await api.post('/transaction-reversal', form.value);
      responseMessage.value = res.data;
    } catch (error) {
      console.error(error);
      responseMessage.value = 'Failed to reverse transaction';
    } finally {
      isLoading.value = false;
    }
  };

  const formattedResponse = computed(() => {
    if (responseMessage.value && typeof responseMessage.value === 'object') {
      const { OriginatorConversationID, ConversationID, ResponseCode, ResponseDescription } = responseMessage.value;
      return `Originator Conversation ID: ${OriginatorConversationID}\nConversation ID: ${ConversationID}\nResponse Code: ${ResponseCode}\nResponse Description: ${ResponseDescription}`;
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
