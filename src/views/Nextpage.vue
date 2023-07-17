<template>
<div class="login-box">
    <h1 class="heading">Login</h1>

    <form>
        <label class="userName" for="userName">UserName*</label>
        <input class="userName" placeholder="Enter User Name">
        <label class="userName" for="userName">Password*</label>
        <input class="userName" placeholder="Enter Password">
    </form>
    <button class="submit">Submit</button>

</div>


</template>
<script>
export default{
    data(){
        return{

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
</style>