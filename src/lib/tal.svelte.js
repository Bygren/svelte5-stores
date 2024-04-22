let value = $state(1000);

export function store() {

   return {
      get value() { return value },
      set value(v) { value = v }
   }
}  


let x = $state(10);

export let price = {
   get val() {
      return x;
   },
   set val(v){
      x = v;
   }
}

let show = $state(false);

export let  menu = {
   get show() {
      return show;
   },
   set show(value){
      show = value;
   }
}