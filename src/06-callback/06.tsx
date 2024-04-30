import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

   const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
      console.log(event.currentTarget);
      console.log("user have been deleted");
   }

   const saveUser = (event: MouseEvent<HTMLButtonElement>) => {
      console.log("user have been saved");
   }

   const onNameChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      console.log(event.currentTarget.value);
      console.log("name changed");
   }

    const onBlurHandler = () => {
       console.log("focus LOST")
    }

   return (
      <div style={{padding: "40px"}}>
         <div>
            danila
            <button name="delete" onClick={deleteUser}>delete</button>
            <button name="save" onClick={saveUser}>save</button>
         </div>
         <div>
            <textarea placeholder="text" cols={30} rows={10} onChange={onNameChange} onBlur={onBlurHandler}>
               Danila
            </textarea>
         </div>
      </div>
   )
}