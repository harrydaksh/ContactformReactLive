import React from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
import { object, string, ref } from "yup";
import Input from "./formFields/Input";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const RegisterValidation = object().shape({
    name: string().required("Required"),
    email: string()
        .required("Valid email required")
        .email("Valid email required"),
    // phone:strin

});


const ContactForm =()=> {
    const handleSubmit = (values,formProps) => {
        const {resetForm} = formProps
        console.log(values);
        toast.success("Thanks for Contact");
        axios.post(`https://contactform-d5238-default-rtdb.firebaseio.com/contactform.json`, values).then(res => {

            if (res.status == 201) {
                toast.success("Donor Registered successfully");
                resetForm();

            }
        }).catch(err => {
            // toast.error('Something Went Wrong Please Give Proper details')
            toast.error("something went wrong")

        })

    };

    return (
        <div className="h-screen flex items-center justify-center flex-col bg-gray-100">
            <h1 className={"heading"}>Contact with Harry</h1>
            <ToastContainer />
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={RegisterValidation}
            >
                {() => {
                    return (


                        <Form className="contact_Form">
                            <div className="form">
                                <Input name="name" label="Name" />
                                <Input name="email" label="Email" />
                                <Input name="phone" label="Phone"  />
                                <Input
                                    name="address"
                                    label="Address"

                                />

                                <div className="flex items-center justify-between">
                                    <button
                                        className="primary_btn"
                                        type="submit"
                                    >
                                        Register
                                    </button>
                                </div>


                            </div>

                        </Form>
                    );
                }}
            </Formik>
        </div>

    );
}

export default ContactForm;
