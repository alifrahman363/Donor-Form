<template>
  <div
    class="section section-signup"
    style="background-image: url('img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;"
  >
    <!-- add this -->
    <div>         
      <alert v-model="alert.show" :type="alert.type" dismissables >
        {{alert.message}}
      </alert>
    </div>
    
    <div class="container">  
      <div class="row">
        <card class="card-signup" header-classes="text-center" color="orange">
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
              
              <fg-input class="no-border" placeholder="Blood Group" v-model="donor.donorBloodGroup" addon-left-icon="now-ui-icons ui-1_email-85"></fg-input>

            </template>

          <div class="card-footer text-center"> 
            <v-btn type="submit">
              <n-button @click="donorform()" type="submit" round size="lg">Register</n-button>
            </v-btn> 
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
import { Alert } from '@/components'; //add this

export default {
  components: {
    // Modal, 
    Card,
    Alert, //add this
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
      
      alert:{             //add this
        show: false , 
        message: '' 
      },  
    };
  },
  methods: {    
    //refactored
    async donorform(){ 
      validateFname(this.donor.donorFname)
      try {
        const res = await this.axios.post('/donorform', this.donor)
        console.log('printing result: ', res.data.message);
        console.log('data: ', res);
        this.alert = {
        show: true, 
        type:"success",
        message: res.data.message
       } 
       } catch (error) {
         this.alert ={
           show: true, 
           type: 'danger',
           message: error.response.data.message
         }
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
