import React from 'react'
import { ErrorMessage } from "@hookform/error-message";


const normalizeCardNumber = (value) => {
    return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
}

export default function FormularioNumber({formularioDadosNumber, label, register, required,errors}) {

    

    return (
        <li>
            <label htmlFor="NumberCard" className='text-base text-very-dark-violet font-medium'>{label}</label>
            <input
                type="tel"
                id='NumberCard'
                inputMode='numeric'
                maxLength={16}
                placeholder='e.g. 1234 5678 9123 0000'
                className='border border-light-grayish-violet ps-4 py-2 rounded-md w-full font-medium placeholder:text-light-grayish-violet mt-2'
                {...register(label, {
                    required: "This is required.",
                    pattern: {
                        value: /[0-9]/,
                        message: "Wrong format, numbers only."
                    },
                    minLength: {
                        value: 16,
                        message: "Min Length are 16 characters."
                    }
                })}
                onChange={(event) => {
                    const { value } = event.target;
                    const normalizedValue = normalizeCardNumber(value);
                    formularioDadosNumber( normalizedValue );
                }}/>
                <ErrorMessage errors={errors} name={label}  as="p" className='text-red font-bold text-xs'>
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
