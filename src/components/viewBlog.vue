<template>
    <div>
        <div class="col-md-6 offset-md-3">
            <h3 class="text-center">Read Blog</h3>
            <h4>{{blog.title}}</h4>
            <p>{{blog.post}}</p>
            <p>Author: {{blog.author}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            blog:{}
        }
    },
    methods: {

    },
    created(){
      this.$http.get('https://blog-1de0e.firebaseio.com/data/' + this.id + '.json').then(response =>{
          console.log(response);
          this.blog = response.data;
          
        //   const resultArray = [];
        //   for (let key in response.data){
        //     // var result = this.users.push(response.data[key]);
        //     response.data[key].id = key
        //     resultArray.push(response.data[key]);
        //   }
        //   this.blogs = resultArray;
        //   console.log(this.blogs);
        }, error=>{
          console.log(error)
        }) 
    }
}
</script>