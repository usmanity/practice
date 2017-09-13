<template>
  <div class="hello">
    <form class="" action="index.html" method="post">
      <input class="phone-number-input" type="text"
        name="phone-number"
        v-model="phoneNum"
        @keyup="maskPhoneNumber(phoneNum)"
        placeholder="(123) 123-1234">
    </form>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'hello',
  data () {
    return {
      phoneNum: '',
      actualNumber: null,
      mask: '(ddd) ddd-dddd'
    }
  },
  methods: {
    maskPhoneNumber(value) {
      var mask = this.mask.slice(0);
      if (value) {
        const onlyDigits = this.stripDigits(value);
        console.log('digits', onlyDigits);
        this.actualNumbers = onlyDigits;
        _.forEach(onlyDigits, (digit) => {
          mask = mask.replace(new RegExp('d'), digit);
        });
      }
      this.phoneNum = mask.split('d')[0];
    },
    stripDigits(mixedString) {
      let digits = '';
      _.forEach(mixedString, (d) => {
        if (this.isNumeric(d)) {
          digits += d;
        }
      });
      return digits;
    },
    isNumeric(val) {
      return !isNaN(parseFloat(val)) && isFinite(val)
    }
  }
}
</script>

<style scoped>

</style>
