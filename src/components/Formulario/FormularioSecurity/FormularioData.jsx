import React from 'react'
import { ErrorMessage } from "@hookform/error-message";

export default function FormularioData({ formularioDadosMounth, formularioDadosYear, label, register, required, errors }) {
    return (
        <>
            <label htmlFor="Data" className='text-base text-very-dark-violet font-medium'>{label}</label>
            <div className='flex gap-3 pt-2'>
                <div className='flex-col w-1/2'>
                    <input
                        className='border border-light-grayish-violet ps-4 py-2 rounded-md w-full font-medium placeholder:text-light-grayish-violet'
                        type="tel"
                        name="MM"
                        placeholder='MM'
                        maxLength={2}
                        id="Data"
                        {...register("MM", {
                            required: "This input is required.",
                            pattern: {
                                value: /\d+/,
                                message: "This input is number only."
                            },
                            max: {
                                value: 12,
                                message: "There are only 12 months"
                            }
                        })}
                        onChange={(event) => { formularioDadosMounth(event.target.value) }}
                    />
                    <ErrorMessage errors={errors} name="MM"  as="p" className='text-red font-bold text-xs'>
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
                </div>

                <div className='flex-col w-1/2'>
                    <input
                        type="tel"
                        name="YY"
                        placeholder='YY'
                        id="Data"
                        maxLength={2}
                        className='border border-light-grayish-violet ps-4 py-2 rounded-md w-full font-medium placeholder:text-light-grayish-violet'
                        {...register("YY", { 
                            required: "This input is required.",
                            pattern: {
                                value: /\d+/,
                                message: "This input is number only."
                            },
                            min: {
                                value: 24,
                                message: "Invalid Year"
                            }
                        })}
                        onChange={(event) => { formularioDadosYear(event.target.value) }}
                    />
                    <ErrorMessage errors={errors} name="YY"  as="p" className='text-red font-bold text-xs'>
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
                </div>

            </div>
        </>
    )
}
