import moment from 'moment'
import Vue from 'vue'

Vue.filter('dateFormat', function (value) {

    return moment(value).format("MMM Do YY");
});
Vue.filter('shortlength', function (text, length, suffix) {
    return text.substring(0, length) + suffix;
});