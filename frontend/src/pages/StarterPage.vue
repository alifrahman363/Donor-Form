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
        <card @submit.prevent="donorform()" class="card-signup" header-classes="text-center" color="orange">
          <template slot="header">
            <h3 class="card-title title-up">Donor Form</h3>  
          </template>

          <v-form ref="donorForm">
            <template>
              <fg-input class="no-border" placeholder="Full Name" v-model="donor.donorFname" addon-left-icon="now-ui-icons users_circle-08"></fg-input>
              
              <fg-input class="no-border" placeholder="Gender" v-model="donor.donorGender" addon-left-icon="now-ui-icons text_caps-small"></fg-input>
              
              <fg-input class="no-border">
                <el-date-picker type="date" popper-class="date-picker date-picker-primary" placeholder="Date of Birth" v-model="donor.donorDoB"></el-date-picker>
              </fg-input>

              <fg-input class="no-border" placeholder="Zip/Post" v-model="donor.donorZip" addon-left-icon="now-ui-icons ui-1_email-85"></fg-input> 

              <fg-input class="no-border" placeholder="City" v-model="donor.donorCity" addon-left-icon="now-ui-icons ui-1_email-85"></fg-input> 

              <fg-input class="no-border" placeholder="District" v-model="donor.donorDistrict" addon-left-icon="now-ui-icons ui-1_email-85"></fg-input> 

              <fg-input class="no-border" placeholder="Division" v-model="donor.donorDivision" addon-left-icon="now-ui-icons ui-1_email-85"></fg-input>
            </template>

          <div class="card-footer text-center">
            <!-- <n-button type="neutral" round size="lg">Get Started</n-button> -->
            <v-btn type="submit">
              <n-button @click="donorForm()" type="submit" round size="lg">Register</n-button>
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
      donor: {donorFname:'', donorGender:'', donorDoB:'', donorZip:'',  donorCity:'', 
                              donorDistrict:'', donorDivision:'', donorBloodGroup:'' }, 
    };
  },
  methods: {  
    async donorform(){
      console.log('entered');
        let valid = this.$refs.donorForm.validate()
        console.log(this.donor) 

        if (valid) {
          try {      
            const res = await this.axios.post('/donorform', this.donor)
            this.$refs.donorForm.reset()
            console.log(res)
            console.log('successfully registered');

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
            // }
            console.log(error);
          }
        }  
      }
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
