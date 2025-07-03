import React from 'react'
import "./Form.css";
import {useForm, SubmitHandler} from "react-hook-form";


const{
  register,
  handleSubmit,
  watch,
  formstate: {errors,isSubmitting}
} = useForm();

const Form = () => {
  return (
    <div>
      <form onSubmit={handleSubmit((data)=>console.log(data))}>
        <div className="formElements">
          <label htmlFor="">Name : </label>
          <input {...register('name', {required:true, minLength:2})} />
        </div>

        <div className="formElements">
          <label htmlFor="">Company : </label>
          <input {...register('company')} />
        </div>

        <div className="formElements">
          <label htmlFor="">Phone Number : </label>
          <input {...register('phnNumber')} />
        </div>
      </form>
    </div>
  )
}

export default Form
