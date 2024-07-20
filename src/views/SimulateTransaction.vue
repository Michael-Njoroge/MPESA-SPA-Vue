<template>
<div class="container">
        <TopNav />
        <div class="row mt-2">
            <div class="mx-auto col-sm-10">
             <div class="card my-2">
                <div class="card-header">
                   Simulate Transaction
                </div>
                <div class="card-body">
                    <div class="">
                        <div v-if="isLoading" class="alert alert-info text-center">Please wait while we process your request...</div>
                        <div v-else-if="responseMessage" class="alert alert-success">
                            <pre>{{ formattedResponse }}</pre>
                        </div>
                        <div v-else class="alert alert-info text-center">Fill the Form and Click the button to Simulate Transaction.</div>
                    </div>
                    <form action="" @submit.prevent="simulateTransaction">
                        <div class="form-group my-3">
                            <label for="amount">Amount:</label>
                            <input v-model="form.amount" type="number" placeholder="Enter Amount" name="amount" class="form-control" required>
                        </div>
                         <div class="form-group my-3">
                            <label for="account">Account:</label>
                            <input v-model="form.account" type="text" placeholder="Enter Account No." name="account" class="form-control" required>
                        </div>
                        <button type="submit" id="simulate" class="btn btn-primary w-100 mt-2" :disabled="isLoading">
                            <div v-if="isLoading" class="text-center">
                            <div class="spinner-border spinner-border-sm" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>&nbsp;&nbsp;
                            <span > Submitting...</span>
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
      account: '',
    });

  const simulateTransaction = async () => {
    isLoading.value = true;
    responseMessage.value = null;
    try {
      const res = await api.post('/simulate-transaction',form.value);
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
      const { OriginatorCoversationID, ResponseCode, ResponseDescription } = responseMessage.value;
      return `Originator Coversation ID: ${OriginatorCoversationID}\nResponse Code: ${ResponseCode}\nResponse Description: ${ResponseDescription}`;
    }
    return responseMessage.value;
});

</script>

<style scoped>
  label,.card-header{
    font-weight: bold;
}
</style>
