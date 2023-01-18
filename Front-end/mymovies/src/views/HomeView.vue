<template>
  <div>
  <input id="Email" class="input" type="email" v-model="mailadress" placeholder=" " />
  <input id="Password" class="input" type="password" v-model="password" placeholder=" " />
  <button v-on:click="loguser()" type="button" class="submit" id="submitButton" >submit</button>
  </div>
  <div>

  </div>
</template>

<script>
// @ is an alias to /src
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

        let myuuid = uuidv4().replaceAll('-','');

        let data = {
          "mailadress" : this.mailadress,
          "password" : this.password,
          "uuid" : myuuid
        }

        await fetch("http://localhost:1313/auth/register", {
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


<style>
.input {
  border-bottom: 1px solid #000000;
  width: 380px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  box-sizing: border-box;
  color: #000000;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  border-radius: 10px;
}
</style>
