
import { extend, } from 'vee-validate';
import { required,  numeric, alpha } from 'vee-validate/dist/rules';



extend('required', {
  ...required,
  message: 'This field is required',
  
});

extend('numeric', {
  ...numeric,
  message: 'The  field may only contain numbers',
  
});
extend('alpha', {
  ...alpha,
  message: 'The  field may only contain alphabetic letters',
  
});

