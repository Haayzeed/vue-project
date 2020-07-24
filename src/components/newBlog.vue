<template>
    <div>
        <div class="col-md-12">
            <div class="row mt-3">
                <div class="col-md-6 offset-md-3">
                    <h3 class="text-center mb-4">Create a Blog Post</h3>
                    <form action="">
                        <div class="alert">
                            <div class="alert alert-success" v-if="show">Post Created Successfully.</div>
                        </div>
                        <div class="alert">
                            <div class="alert alert-danger" v-if="shows">Fill Fields Correctly.</div>
                        </div>
                        <div class="form-group">
                            <label for="">Author's Name</label>
                            <input type="text" class="form-control" placeholder="Author's Name" v-model="blog.author">
                        </div>
                        <div class="form-group">
                            <label for="">Blog Title</label>
                            <input type="text" class="form-control" placeholder="Blog Title" v-model="blog.title">
                        </div>
                        <div class="form-group">
                            <label for="">Blog Category</label>
                            <select name="" id="" class="form-control" v-model="blog.category">
                                <option v-for="cat in cats" :key="cat">{{cat}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="">Blog Post</label>
                            <textarea name="" id="" cols="30" rows="10" class="form-control" v-model="blog.post"></textarea>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary rounded-0 btn-lg" @click="addPost">Add Post</button> &nbsp;
                            <router-link to="/blogs" class="btn btn-primary rounded-0 btn-lg">View Blogs</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            blog:{
                author: '',
                title: '',
                post: '',
                category: ''
            },
            cats: ["All", "Programming", "Sports", "Tech"],
            show: false,
            shows: false
        }
    },
    methods: {
        addPost(e){
            e.preventDefault();
            if((this.blog.author == '') || (this.blog.title == '') || (this.blog.post == '')){
                this.shows = 'true';
            }
            else{
                this.$http.post('https://blog-1de0e.firebaseio.com/data.json', this.blog).then(() =>{
                this.shows = false;
                this.show = true;
        }, error=>{
            console.log(error)
        })
            }
        }
    },
}
</script>
<style scoped>

</style>
