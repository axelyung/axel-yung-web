<template>
  <div class="body">
    <div class="row">
      <div class="offset-md-3 col-md-6">
        <h1>{{ data.title }}</h1>
        <p>{{ data.blurb }}</p>
      </div>
      <div class="offset-md-3 col-md-6">
        <form :action="'https://formspree.io/' + data.email" method="POST">
          <!--<input type="hidden" name="_next" value="nectima.se">-->
          <input type="text" name="_gotcha" class="display-none">
          <div class="form-group">
            <label for="address">{{ data.labels.email }}</label>
            <input name="_replyto" type="email" class="form-control" id="address" aria-describedby="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="subject">{{ data.labels.subject }}</label>
            <input name="_subject" type="text" class="form-control" id="subject" placeholder="Enter subject">
          </div>
          <div class="form-group">
            <label for="message">{{ data.labels.message }}</label>
            <textarea name="message" class="form-control" id="message" placeholder="Enter message"></textarea>
          </div>
          <input type="submit" class="btn btn-primary" :value="data.labels.submit">
        </form>
      </div>
      <!-- Do not change the code! -->
  
      </script>
    </div>
  </div>
</template>

<script>
import site from 'site'

export default {
  data() {
    return {
      data: site.pages.contact
    }
  }
}
</script>

<style>

</style>
