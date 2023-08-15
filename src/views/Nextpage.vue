<template>
<div class="login-box">
    <h1 class="heading">Login</h1>

    <form>
        <label class="userName" for="userName">UserName*</label>
        <input class="userName" v-model="email" placeholder="Enter User Name">
        <span v-if="v$.email.$error" class="mt5 text-danger">
                  {{ v$.email.$errors[0].$message }}
                </span>
        <label class="userName" for="userName">Password****</label>
        <input class="userName" placeholder="Enter Password" v-model="password" :type="passwordFieldType"  autocomplete="off">

        <span v-if="v$.password.$error" class="mt5 text-danger">
                  {{ v$.email.$errors[0].$message }}
                </span>
          <a  class="showPassword" :class="passwordFieldType" type="button" @click="switchVisibility"
                    >
                    <svg  height="30px" width="30px" fill="#000000" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"
                      style="enable-background:new 0 0 100 100;" xml:space="preserve">
                      <g>
                        <path
                          d="M84.9,48.7l-4.4-4.4c-16.8-17-44-17-60.8,0l-4.4,4.4c-0.3,0.3-0.3,0.9,0,1.2l4.8,4.9c16.5,16.8,43.3,16.8,59.8,0l4.8-4.9   C85.2,49.6,85.2,49.1,84.9,48.7z M50.2,62.6c-7.2,0-13-5.9-13-13.2s5.8-13.2,13-13.2s13,5.9,13,13.2S57.3,62.6,50.2,62.6z">
                        </path>
                        <ellipse cx="50.2" cy="49.3" rx="7.7" ry="7.8"></ellipse>
                      </g>
                    </svg>
                  </a>

                   <a class="showPassword" :class="passwordFieldType" type="button" @click.stop="switchVisibility"
                    v-if="!showPassword">
                    <svg  height="30px" width="30px" fill="#000000" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"
                      style="enable-background:new 0 0 100 100;" xml:space="preserve">
                      <g>
                        <path
                          d="M84.9,48.7l-4.4-4.4c-9.8-10-23.3-14.1-36.1-12.4l2.4,4.2l0.2,0.4c1-0.2,2-0.4,3-0.4c7.2,0,13,5.9,13,13.2   c0,3.5-1.3,6.6-3.5,8.9l0.2,0.4l3.5,6.1l0.2,0.4c6-2,11.6-5.5,16.3-10.3l4.9-4.9C85.2,49.6,85.2,49.1,84.9,48.7z">
                        </path>
                        <path
                          d="M53,62.2c-0.9,0.2-1.9,0.3-2.9,0.3c-7.2,0-13-5.9-13-13.2c0-3.4,1.3-6.5,3.3-8.8l-0.3-0.4l-3.4-5.9l-0.2-0.4   c-6.2,2.1-11.9,5.6-16.8,10.5l-4.3,4.4c-0.3,0.3-0.3,0.9,0,1.2l4.8,4.9c9.7,9.8,22.9,13.9,35.6,12.2l-2.6-4.4L53,62.2z">
                        </path>
                        <path d="M43.4,45.6c-0.6,1.1-1,2.4-1,3.8c0,4.3,3.4,7.8,7.7,7.8L43.4,45.6z"></path>
                        <path
                          d="M57.9,49.3c0-4.3-3.5-7.8-7.7-7.8c0,0-0.1,0-0.1,0l6.8,11.8C57.5,52.1,57.9,50.8,57.9,49.3z">
                        </path>
                        <polygon
                          points="58.2,59.7 55.5,55 55.5,55 47.9,41.8 47.9,41.8 45.2,37.1 42.4,32.2 37.6,24 34.3,25.9 38.5,33.1 42,39.1    44.7,43.8 44.7,43.8 52.2,56.9 52.2,56.9 55,61.6 57.9,66.7 62.7,75 66,73.1 61.8,65.8  ">
                        </polygon>
                      </g>
                    </svg>
                  </a> 
    </form>
    <button class="submit" @click="submit" >Submit</button>

</div>


</template>
<script>

import useValidate from "@vuelidate/core";
import { required, email, minLength, helpers, sameAs } from "@vuelidate/validators";
// import { required } from "@vuelidate/core";

export default{
   
    data(){
        return{
            showPassword:false,
             passwordFieldType:"password",
             v$:useValidate(),
             email:"",
             password:"",


        }
    },


    validations(){
      return{
      email: {
        required: helpers.withMessage("Please Enter Email Id", required), 
      },
      password:{
        required:helpers.withMessage("Please Enter Password",required),
      }
    }
    },
    methods:{

      switchVisibility() {
        this.showPassword = !this.showPassword;
        (this.passwordFieldType =
          this.passwordFieldType === "password" ? "text" : "password"),
        (this.visibility = this.visibility === true ? false : true);
        
        // setTimeout(() => {
        //       }, 1000);
              
           {
        //    if("text"=="password");
        //     setTimeout(() => {
        //      this.passwordFieldType = "password"
        //       this.showPassword = false;
              
        //       }, );

           }



      },

      submit(){
            this.v$.$validate()
          if(!this.v$.$error){

            this.$router.push('/Practice')

            }
      }




    }
}
</script>
<style>
.login-box{
    height:auto;
    border:2px solid blueviolet;
    border-radius: 10px;
    width:75%

}
.heading{

    text-align: center;

}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
 

}

.submit{
   left: 45%;
    margin-top: 4px;
   
}
.userName{
    margin-top: 4px;
}

.showPassword {
      position: absolute;
      right: 136px;
      top: 95px;
      width: 24px;
      height: 24px;
      display: block;
      border: none;
      outline: none;
  }
</style>