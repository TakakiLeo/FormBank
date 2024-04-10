import React from 'react'
import { ErrorMessage } from "@hookform/error-message";

export default function FormularioCVC({ formularioDadosCVC, label, register, required,errors }) {
  return (
    <>
      <label htmlFor="cvc" className='text-base text-very-dark-violet font-medium'>{label}</label>
      <input
        type="tel"
        name="cvc"
        placeholder='e.g. 123'
        inputMode='numeric'
        maxLength={3}
        id="cvc"
        className='border border-light-grayish-violet ps-4 py-2 rounded-md w-full font-medium placeholder:text-light-grayish-violet mt-2'
        {...register(label, {
          required: "This is required.",
          pattern: {
            value: /[0-9]/,
            message: "Wrong format, numbers only."
          },
          minLength: {
            value: 3,
            message: "Min Length are 3 characters."
          },
        })}
        onChange={event => { formularioDadosCVC(event.target.value) }}
      />
      <ErrorMessage errors={errors} name={label} as="p" className='text-red font-bold text-xs'>
        {({ messages }) => {
          console.log(messages);
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          );
        }}
      </ErrorMessage>
    </>
  )
}

