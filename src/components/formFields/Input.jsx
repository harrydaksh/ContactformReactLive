import React from 'react';
import {ErrorMessage, useField} from "formik";

const Input = ({ name, label, ...props }) => {


        const [field, meta] = useField(name);
    return (
            <div className="input">
                <label className="block text-gray-700 text-sm font-bold" for={field.name}>
                    {label}
                </label>
                <input
                    className={`${
                        meta.error && meta.touched ? "border-red-500" : ""
                    } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                    {...field}
                    {...props}
                />
                <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-red-500 text-xs"
                />
            </div>
        );
    };



export default Input;
