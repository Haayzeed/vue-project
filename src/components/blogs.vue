<template>
    <div>
        <div class="col-md-12">
            <div class="row mt-3">
                <div class="col-md-6 offset-md-3">
                    <h3 class="text-center mb-4">View Blog Post</h3>
                    <div class="col-md-12" v-for="(blog, index) in blogs" :key="index">
                    <router-link :to="'viewBlog/' + blog.id">{{blog.title}}</router-link>
                    <P>{{blog.post}}</P>
                    <P>{{blog.author}}</P>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            blogs: {}
        }
    },
    methods: {
        
    },
    created(){
      this.$http.get('https://blog-1de0e.firebaseio.com/data.json').then(response =>{
          console.log(response);
          
          const resultArray = [];
          for (let key in response.data){
            // var result = this.users.push(response.data[key]);
            response.data[key].id = key
            resultArray.push(response.data[key]);
          }
          this.blogs = resultArray;
          console.log(this.blogs);
        }, error=>{
          console.log(error)
        }) 
    }
}
</script>
<style scoped>

</style>
