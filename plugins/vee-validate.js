
import { extend, } from 'vee-validate';
import { required,  numeric } from 'vee-validate/dist/rules';



extend('required', {
  ...required,
  message: 'This field is required',
  
});

extend('numeric', {
  ...numeric,
  message: 'The  field may only contain numbers',
  
});

