<template>
<div class="container">
        <TopNav />
        <div class="row mt-2">
            <div class="mx-auto col-sm-10">
            <div class="card">
                <div class="card-header">
                    Laravel/Vue Implementation of Daraja APIs
                </div>
                <div class="card-body scrollable-content">

                  <!-- Access Token Management -->
                  <h5 class="sub-title">Access Token Management</h5>
                  <p>
                    The system allows you to obtain an access token, which is crucial for authenticating and authorizing API requests. The access token grants permission to perform various operations within the system.<br> To request an access token:
                    <ul>
                      <li><b>Button:</b> Click on the <b>"Generate Token"</b> button to initiate the process of acquiring a new access token.</li>
                      <li><b>Display:</b> The obtained access token will be displayed below the the card header.</li>
                    </ul>
                  </p>

                  <!-- URL Registration -->
                  <h5 class="sub-title">URL Registration</h5>
                  <p>
                    In this section, you can register URLs with the system. Registering URLs is essential for integrating with various endpoints or services. This setup helps in managing and configuring the endpoints that the system interacts with.<br> To register URLs:
                    <ul>
                      <li><b>Button:</b> Click on the <b>"Register URLs"</b> button to start the URL registration process</li>
                      <li><b>Display:</b> Response from the registration process will be displayed below the the card header.</li>
                    </ul>
                  </p>

                  <!-- Transaction Simulation -->
                  <h5 class="sub-title">Transaction Simulation</h5>
                  <p>
                    The transaction simulation feature allows you to simulate transactions by entering specific details. This helps in testing and validating the transaction process without performing actual transactions.<br> To simulate a transaction:
                    <ul>
                      <li><b>Form Fields:</b>
                        <ul>
                          <li><b>Amount: </b>Enter the amount for the transaction.</li>
                          <li><b>Account: </b>Enter the account information related to the transaction.</li>
                        </ul>
                      </li>
                      <li><b>Button:</b> Click on the <b>"Simulate"</b> button to initiate the simulation process.</li>
                      <li><b>Response:</b> The result of the simulation will be displayed below the card header.</li>
                    </ul>
                  </p>

                  <!-- B2C Transactions -->
                  <h5 class="sub-title">B2C Transactions</h5>
                  <p>
                    B2C (Business to Customer) transactions allow you to simulate bulk payments or payouts to customers. This feature is useful for testing payment distributions.<br> To simulate a B2C transaction:
                    <ul>
                      <li><b>Form Fields:</b>
                        <ul>
                          <li><b>Amount: </b>Enter the total amount for the B2C transaction.</li>
                          <li><b>Phone Number: </b>Enter the phone number of the recipient.</li>
                          <li><b>Remarks: </b>Provide any remarks for the transaction.</li>
                        </ul>
                      </li>
                      <li><b>Button:</b> Click on the <b>"Simulate B2C Transaction"</b> button to start the B2C simulation.</li>
                      <li><b>Response:</b> The result of the B2C simulation will be displayed below the card header.</li>
                    </ul>
                  </p>

                  <!-- STK Push -->
                  <h5 class="sub-title">STK Push</h5>
                  <p>
                    STK Push functionality allows you to simulate a payment request using the Shortcode, Lipa Na M-Pesa Online, or other similar payment methods. This helps in testing the payment gateway integration.<br> To use STK Push:
                    <ul>
                      <li><b>Form Fields:</b>
                        <ul>
                          <li><b>Phone Number: </b>Enter the phone number for the payment request.</li>
                          <li><b>Amount: </b>Enter the amount for the payment request.</li>
                          <li><b>Shortcode: </b>Provide the shortcode for the payment request.</li>
                        </ul>
                      </li>
                      <li><b>Button:</b> Click on the <b>"Initiate STK Push"</b> button to start the payment request simulation.</li>
                      <li><b>Response:</b> The response from the payment request will be displayed below the card header.</li>
                    </ul>
                  </p>

                  <!-- Regards -->
                  <p class="mt-4 d-flex flex-column">
                    <b>Best regards,</b>
                    <a style="text-decoration: none;" href="mailto:mikethecoder12@gmail.com" target="_blank">mikethecoder12@gmail.com</a>
                    <b>Michael Njoroge</b>
                  </p>

                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="js">
  import TopNav from "@/components/TopNav.vue";

</script>

<style scoped>
  .sub-title{
    text-decoration: underline;
    font-weight: bold;
  }
  .scrollable-content {
    max-height: 575px;
    overflow-y: auto;
  }
  a:hover{
    text-decoration: underline;
  }
.card-header{
    font-weight: bold;
}
</style>