<template>
  <div class="body contact">
    <div class="row">
      <div class="page-header offset-md-2 col-md-8 offset-lg-3 col-lg-6">
        <h1>{{ data.title }}</h1>
        <p>{{ data.blurb }}</p>
      </div>
      <div class="offset-md-3 col-md-6">
        <form ref="emailForm" :action="'https://formspree.io/' + data.email" method="POST">
          <input type="hidden" name="_next" value="/#/thanks">
          <input type="text" name="_gotcha" class="display-none">
          <div class="form-group">
            <label class="error-msg" v-if="errors.has('_replyto') && submitFailed">{{ errors.first('_replyto') }}</label>
            <label for="address">{{ data.labels.email }}</label>
            <input v-validate="'required|email'" name="_replyto" type="text" class="form-control" id="address" aria-describedby="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="subject">{{ data.labels.subject }}</label>
            <input name="_subject" type="text" class="form-control" id="subject" placeholder="Enter subject">
          </div>
          <div class="form-group">
            <label class="error-msg" v-if="errors.has('message') && submitFailed">{{ errors.first('message') }}</label>
            <label for="message">{{ data.labels.message }}</label>
            <textarea v-validate="'required'" name="message" class="form-control" id="message" placeholder="Enter message"></textarea>
          </div>
          <button ref="submitBtn" type="button" @click="submit" class="btn btn-primary">
            <span>{{ data.labels.submit }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import site from 'site'
import { Validator } from 'vee-validate';
const dictionary = {
  en: {
    custom: {
      _replyto: {
        required: 'Who should I respond to?',
        email: 'This doesn\'t look like a valid email'
      },
      message: {
        required: 'What\'s your message?'
      }
    }
  }
};

Validator.updateDictionary(dictionary);

export default {
  data() {
    return {
      data: site.pages.contact,
      submitFailed: false,
    }
  },
  methods: {
    submit() {
      this.$validator.validateAll().then((val) => {
        this.$refs.submitBtn.blur();
        if (val) {
          this.$refs.emailForm.submit();
        } else {
          this.submitFailed = true;
        }
      });
    }
  }
}
</script>

<style>

</style>
