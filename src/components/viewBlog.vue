<template>
    <div>
        <div class="col-md-6 offset-md-3 mt-3">
            <h3 class="text-center">Read Blog</h3>
            <hr>
            <h4>{{blog.title}}</h4>
            <p>{{blog.post}}</p>
            <p class="mb-0"><span class="font-weight-bold">Author:</span> {{blog.author}}</p>
            <p><span class="font-weight-bold">Category:</span> {{blog.category}}</p>

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
          this.blog = response.data;
        }, error=>{
          console.log(error)
        }) 
    }
}
</script>