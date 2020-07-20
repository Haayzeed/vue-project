<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>


// import newBlog from './components/newBlog.vue'
  export default {
    components: {
      // 'new-blog': newBlog
    },
    data: function(){
      return{
        
    }
    },
    methods: {
      submit(e){
        e.preventDefault();
        // this.$http.post('https://quote-1cc5c.firebaseio.com/data.json', this.user).then(response =>{
        //   console.log(response)
        // }, error=>{
        //   console.log(error)
        // })
      },
    },
    filters: {
      toUpperCase(value){
        return value.toUpperCase();
      }
    },
    created(){
      // this.$http.get('https://quote-1cc5c.firebaseio.com/data.json').then(response =>{
      //     console.log(response);
          
      //     const resultArray = [];
      //     for (let key in response.data){
      //       // var result = this.users.push(response.data[key]);
      //       resultArray.push(response.data[key]);
      //     }
      //     this.users = resultArray;
      //     // console.log(result);
      //   }, error=>{
      //     console.log(error)
      //   }) 
    }
  }
</script>

<style>

</style>


