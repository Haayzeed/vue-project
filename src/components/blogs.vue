<template>
    <div>
        <div class="col-md-12">
            <div class="row mt-3">
                <div class="col-md-6 offset-md-3">
                    <h3 class="text-center mb-4">View Blog Post</h3>
                    <hr>
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" class="form-control" v-model="search" placeholder="Search for Blog News">
                        </div>
                        <div class="col-md-6">
                            <select name="" id="" class="form-control" v-model="catt">
                                <option v-for="cat in cats" :key="cat">{{cat}}</option>
                            </select>
                        </div>
                    </div>
                    <hr>
                    <div class="col-md-12" v-for="(blog, index) in filteredBlogs" :key="index">
                    <router-link :to="'viewBlog/' + blog.id" class="h5 text-dark">{{blog.title}}</router-link>
                    <p>{{ blog.post | snippet }}</p>
                    <p class="mb-0"><span class="font-weight-bold">Author: </span>{{blog.author}}</p>
                    <p><span class="font-weight-bold">category: </span>{{blog.category}}</p>
                    <hr>
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
            blogs: [],
            search: '',
            cats: ["All", "Programming", "Sports", "Tech"],
            catt: ''
        }
    },
    created(){
      this.$http.get('https://blog-1de0e.firebaseio.com/data.json').then(response =>{
          const resultArray = [];
          for (let key in response.data){
            response.data[key].id = key
            resultArray.push(response.data[key]);
          }
          this.blogs = resultArray;
        }, error=>{
          console.log(error)
        });
        
    },
    computed: {
        filteredBlogs(){
            return this.blogs.filter((blog) =>{
                return blog.title.toLowerCase().match(this.search.toLowerCase());
            }).filter((blog) =>{
                return blog.category.match(this.catt);
            });
        }
    }
}
</script>
<style scoped>

</style>
