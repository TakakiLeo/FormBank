import React from 'react'
import { ErrorMessage } from "@hookform/error-message";


export default function FormularioName({ formularioDadosName, label, register, errors }) {
    return (
        <li>
            <label htmlFor="NameCard" className='text-base text-very-dark-violet font-medium'> {label} </label>
            <input
                type="text"
                id='NameCard'
                maxLength={30}
                placeholder='e.g. Jane Appleseed'
                className='border border-light-grayish-violet ps-4 py-2 rounded-md w-full font-medium placeholder:text-light-grayish-violet mt-2'
                {...register(label, {
                    required: "This is required.",
                    pattern: {
                        value: /^[a-zA-Z ]*$/,
                        message: "Wrong format, characters only."
                    }
                })}
                onChange={(event) => { formularioDadosName(event.target.value) }}
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


        </li>
    )
}
