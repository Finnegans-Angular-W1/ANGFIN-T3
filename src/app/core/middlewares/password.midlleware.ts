import { FormControl } from "@angular/forms"

export const samePasswords = ( controls : FormControl )=>{
  const mainPassword = controls.get('password');
  const newPassword = controls.get('repeatPassword');

   return mainPassword !== newPassword ? {notSamePassword : true }: null

}