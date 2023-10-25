<!-- <template>
  <div class="starter-page">
    <div class="section text-center">
      <h3>Create your next awesome website</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'starter'
};
</script>
<style>
.starter-page {
  min-height: calc(100vh - 95px);
}
</style> -->


<template>
  <div
    class="section section-signup"
    style="background-image: url('img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;"
  >
    <div class="container">
      <div class="row">
        <card @submit.prevent="handleSignup()" class="card-signup" header-classes="text-center" color="orange">
          <template slot="header">
            <h3 class="card-title title-up">Donor Form</h3>
            <!-- <div class="social-line">
              <a
                href="#pablo"
                class="btn btn-neutral btn-facebook btn-icon btn-round"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="#pablo"
                class="btn btn-neutral btn-twitter btn-icon btn-lg btn-round"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="#pablo"
                class="btn btn-neutral btn-google btn-icon btn-round"
              >
                <i class="fab fa-google-plus"></i>
              </a>
            </div> -->
          </template>

          <v-form @submit.prevent="signup()" ref="signupForm">
          <template>
            <fg-input
              v-model="formData.fname"
              class="no-border"
              placeholder="Full Name"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>

            <fg-input
              v-model="formData.lname"
              class="no-border"
              placeholder="Gender"
              addon-left-icon="now-ui-icons text_caps-small"
            >
            </fg-input>

            <fg-input class="no-border">
              <el-date-picker
                type="date"
                popper-class="date-picker date-picker-primary"
                placeholder="Date of Birth"
                v-model="pickers.datePicker"
              >
              </el-date-picker>
            </fg-input>

            <fg-input
              v-model="formData.email"
              class="no-border"
              placeholder="Zip/Post"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input> 

            <fg-input
              v-model="formData.email"
              class="no-border"
              placeholder="City"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input> 

            <fg-input
              v-model="formData.email"
              class="no-border"
              placeholder="District"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input> 

            <fg-input
              v-model="formData.email"
              class="no-border"
              placeholder="Division"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
          </template>

          <div class="card-footer text-center">
            <!-- <n-button type="neutral" round size="lg">Get Started</n-button> -->
            <v-btn type="submit">
              <n-button @click="handleSignup()" type="submit" round size="lg">Register</n-button>
            </v-btn>
            <!-- <n-button @click="clickButton()" type="submit" round size="lg">Get Started with Sign Up</n-button> -->
          </div>

        </v-form>

        </card>
      </div>
      <div class="col text-center">
        <router-link
          to="/login"
          class="btn btn-simple btn-round btn-white btn-lg"
        >
          View Login Page
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

import { Card, FormGroupInput, Button } from '@/components';
import { Popover, Tooltip, DatePicker } from 'element-ui';
export default {
  components: {
    // Modal, 
    Card,
    [Popover.name]: Popover,
    [Tooltip.name]: Tooltip,
    [DatePicker.name]: DatePicker, 
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }, 
  data() {
    return {
      formData: {
        fname: '',
        lname: '',
        email: '',
      }, 
      modals: {
        classic: false,
        mini: false
      },
      pickers: {
        datePicker: ''
      }
    };
  },
  methods: {
    clickButton(){
      console.log('clicked');
    },
    async handleSignup() {
      console.log('clicked');
      try {      
        const res = await this.axios.post('/data', this.formData)
        // this.$refs.donorForm.reset()
        console.log(res)

        // this.donorAlert = {
        //   showDonor: true, 
        //   type:"success",
        //   message: res.data.message
        // } 
      } catch (error) {
        // this.donorAlert ={
        //   showDonor: true, 
        //   type: 'error',
        //   message: error.response.data.message
        console.log(error);
        }
    },
  },
};
</script>
<!-- <style></style> -->
<style lang="scss">
#javascriptComponents {
  .modal-buttons,
  .popover-buttons,
  .tooltip-buttons {
    .btn + .btn {
      margin-left: 3px;
    }
  }
}
</style>
