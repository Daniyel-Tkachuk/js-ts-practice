import React, {FC, useState} from "react";

type LessonsType = {
   title: number
}
type AddressType = {
   street: {
      title: string
   }
}
type CarType = {
   model: string
}
export type ManType = {
   name: string
   age: number
   lessons: LessonsType[]
   address: AddressType;
}

type PropsType = {
   title: string
   man: ManType
   food: string[]
   car: CarType
}

const useDanilaState = (initialState: string) => {
   return [initialState, () => {}];
}

const useDanilaState_2 = (m: string) => {
   return {m, fc: function(){}};
}

export const ManComponent: FC<PropsType> = (props) => {

   const {title, man, ...restProps} = props;

   const [message, setMessage] = useDanilaState("hello");
   const {m: state, fc: setState} = useDanilaState_2("hello");

   const {} = useDanilaState("hello");

   return (
      <div>
         <h1>{title}</h1>
         <hr/>
         <div>{man.name}</div>
         <hr/>
         <div>{restProps.car.model}</div>
      </div>
   )
}