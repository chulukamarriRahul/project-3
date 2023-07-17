<template>
  <div>
    <h1>Rahul</h1>
    <img :src="newImage" alt="" srcset="" >
  </div><br>
  
  <grid-container class="boxes ">
  <div v-for="(item,index) in arrImg " :key="item,index" >
    
   <img  @click="changeImage(item.url)" :src="item.url" class="image" > 
   <!-- {{ item.label }}  -->
  


  </div>
</grid-container><br>

<button class="button-size" @click="nextPage">Nextpage</button>

  <!-- <button> Next Page </button> -->
</template>
<script>
import router from '../router';

export default {
  data() {
    return {
      newImage:"",

      arrImg:[
      {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/7c813380-fa6b-4286-8836-af2ff2d1da1d.png",
        "label": "Lorem ipsum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd1be215-ac47-4fb8-8f06-641408c9885b.jpg",
        "label": "Fusce efficitur nisl rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd2be215-ac47-4fb8-8f06-641408c9885b.jpg",
        "label": "Fusce efficitur nisl rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/7c813380-fa6b-4286-8836-af2ff2d1da1d.png",
        "label": "Suspendisse tincidunt nisi sapien, id bibendum dui consequat sed"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd1be215-ac47-4fb8-8f06-641408c9885b.jpg",
        "label": "Fusce efficitur rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd1be215-ac47-4fb8-8f06-641408c9885b.jpg",
        "label": "Fusce efficitur nisl rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/7c813380-fa6b-4286-8836-af2ff2d1da1d.png",
        "label": "Suspendisse tincidunt nisi sapien, id bibendum dui consequat sed"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/7c813380-fa6b-4286-8836-af2ff2d1da1d.png",
        "label": "Suspendisse tincidunt nisi sapien, id bibendum dui consequat sed"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd1be215-ac47-4fb8-8f06-641408c9885b.jpg",
        "label": "Fusce efficitur nisl rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd1be215-ac47-4fb8-8f06-641408c9885b.jpg",
        "label": "Fusce efficitur nisl rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/7c813380-fa6b-4286-8836-af2ff2d1da1d.png",
        "label": "Suspendisse tincidunt nisi sapien, id bibendum dui consequat sed"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd1be215-ac47-4fb8-8f06-641408d9885b.jpg",
        "label": "Fusce efficitur nisl rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd1be215-ac47-4fb8-8f06-641408c9885b.jpg",
        "label": "Fusce efficitur nisl rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/7c813380-fa6b-4286-8836-af2ff2d1da1d.png",
        "label": "Suspendisse tincidunt nisi sapien, id bibendum dui consequat sed"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd1be215-ac47-4fb8-8f06-641408c9885b.jpg",
        "label": "Fusce efficitur rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/7c813380-fa6b-4286-8836-af2ff2d1da1d.png",
        "label": "Suspendisse tincidunt nisi sapien, id bibendum dui consequat sed"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd1be215-ac47-4fb8-8f06-641408c9885b.jpg",
        "label": "Fusce efficitur nisl rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/7c813380-fa6b-4286-8836-af2ff2d1da1d.png",
        "label": "Suspendisse tincidunt nisi sapien, id bibendum dui consequat sed"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd1be215-ac47-4fb8-8f06-641408c9885b.jpg",
        "label": "Fusce efficitur nisl rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd1be215-ac47-4fb8-8f06-641408c9885b.jpg",
        "label": "Fusce efficitur nisl rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/7c813380-fa6b-4286-8836-af2ff2d1da1d.png",
        "label": "Suspendisse tincidunt nisi sapien, id bibendum dui consequat sed"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd1be215-ac47-4fb8-8f06-641408c9885b.jpg",
        "label": "Fusce efficitur nisl rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/dd1be215-ac47-4fb8-8f06-641408c9885b.jpg",
        "label": "Fusce efficitur nisl rutrum"
    },
    {
        "url": "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/7c813380-fa6b-4287-8836-af2ff2d1da1d.png",
        "label": "Suspendisse tincidunt nisi sapien, id bibendum dui consequat sed"
    },
   

      ]


    }
  },
  mounted (){
    var  str = "HELLO"
console.log(str)
var output = str.split(' ').reverse().join(' ');

console.log(output)

  },
  methods:{
    changeImage(item){
      console.log(item,"item")
      this.newImage = item
      console.log( this.newImage,'massge')

    },

    nextPage(){
    this.$router.push('/Nextpage')
    }

    

  }
}
// methods: {
//     console.log("start")

//     setTimeout (function cb(){
//         console.log("call back")
//     },5000)

//     console.log("end")

//     let startDate = new Date().getTime();
//     let endDate = startDate

//     while(endDate < startDate +10000){
//         endDate = new Date().getTime()

//     }
//     console.log("while is End")
// }
</script>
<style>
button {
  font-weight: bold;
  background-color: blue;
  color: white;
}

.image {
  
  float: left;
  width: 100%;
  padding: 5px;
  max-width: 235px;
  line-height: normal;

  border: 1px solid blue;
  
}
.boxes{
  display: grid;
  grid-template-columns: 200px 200px 200px 200px 200px 200px;
 
  padding: 10px;

  
}

.button-size{
  width:10rem;
}




</style>
