<template>
  <div class="post">
    <div class="card">
      <div class="card-header">
        <h4>{{ post.title }}</h4>
      </div>
      <div class="card-block">
        <p class="card-text">{{ bodyClean }}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'post',
    data () {
      return {
        post: {
          title: '',
          body: ''
        }
      }
    },
    created () {
        axios
        .get('http://localhost:8080//node/1?_format=hal_json')
        .then(response => {
          this.post.title = response.data.title[0].value
          this.post.body = response.data.body[0].value
          
        })
        .catch(({ message: error }) => {
          console.info(error)
        })
      },
      computed: {
        // a computed getter
        bodyClean: function () {
        // `this` points to the vm instance
        return this.post.body.replace(/(<([^>]+)>)/ig,"");
        }
      }
  }
</script>
