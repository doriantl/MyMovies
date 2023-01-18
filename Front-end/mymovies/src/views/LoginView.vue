<template>
  <div>
    <input id="Email" class="input" type="email" v-model="mailadress" placeholder=" " />
    <input id="Password" class="input" type="password" v-model="password" placeholder=" " />
    <button v-on:click="loguser()" type="button" class="submit" id="submitButton" >submit</button>
  </div>
</template>


<script>

import {v4 as uuidv4} from 'uuid';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "login",
  data(){
    return{
      mailadress:'',
      password: ''
    }
  },
  methods:{
    async loguser(){


      try {

        let data = {
          "mailadress" : this.mailadress,
          "password" : this.password,
        }

        await fetch("http://localhost:1313/auth", {
          method: 'POST',
          headers : {
            'content-type': 'application/json',
          },
          body : JSON.stringify(data)
        })
// window alert
        this.$router.push('/myacount')
      }
      catch (error) {
        this.error = error

      }
    }
  }
}

</script>