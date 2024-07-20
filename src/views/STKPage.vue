<template>
  <div class="container">
    <TopNav />
    <div class="row my-2">
      <div class="mx-auto col-sm-10">
        <div class="card">
          <div class="card-header">
            STK Simulation
          </div>
          <div class="card-body">
            <div class="">
              <div v-if="isLoading" class="alert alert-info text-center">Please wait while we process your request...</div>
              <div v-else-if="responseMessage" class="alert alert-success">
                <pre>{{ formattedResponse }}</pre>
              </div>
              <div v-else class="alert alert-info text-center">Fill the form and click the button to receive STK prompt.</div>
            </div>
            <form @submit.prevent="simulateSTK" id="stk-form">
              <div class="form-group my-3">
                <label for="phone">Phone:</label>
                <input v-model="form.phone" type="number" placeholder="Enter Phone No." name="phone" class="form-control" required>
              </div>
              <div class="form-group my-3">
                <label for="amount">Amount:</label>
                <input v-model="form.amount" type="number" placeholder="Enter Amount" name="amount" class="form-control" required>
              </div>
              <div class="form-group my-3">
                <label for="account">Account:</label>
                <input v-model="form.account" type="text" name="account" placeholder="Enter Account No." class="form-control" required>
              </div>
              <button id="simulatestk" type="submit" class="btn btn-primary w-100 mt-2" :disabled="isLoading">
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
    phone: '',
    account: '',
  });

  const simulateSTK = async () => {
    isLoading.value = true;
    responseMessage.value = null;
    try {
      const res = await api.post('/stk-simulate', form.value);
      responseMessage.value = res.data;
    } catch (error) {
      console.error(error);
      responseMessage.value = 'Failed to simulate STK';
    } finally {
      isLoading.value = false;
    }
  };

  const formattedResponse = computed(() => {
    if (responseMessage.value && typeof responseMessage.value === 'object') {
      const { MerchantRequestID, CheckoutRequestID, ResponseCode, ResponseDescription, CustomerMessage } = responseMessage.value;
      return `MerchantRequest ID: ${MerchantRequestID}\nCheckout Request ID: ${CheckoutRequestID}\nResponse Code: ${ResponseCode}\nResponse Description: ${ResponseDescription}\nCustomer Message: ${CustomerMessage}`;
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
