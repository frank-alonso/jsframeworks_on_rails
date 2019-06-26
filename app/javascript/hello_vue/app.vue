<template>
    <div id="app">

    <h1>Bitcoin Price</h1>
    
    <table class="table table-striped">
      <tbody>
        <tr v-for="message in messages">
          <td>{{ message.code }} </td>
          <td>{{ message.rate }}</td>
          <td>{{ message.description }}</td>
        </tr>
      </tbody>
    </table>
    </div>

</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      messages: "Hello Vue!"
    }
  },
  mounted() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => {
        this.messages = res.data.bpi;
      })
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
