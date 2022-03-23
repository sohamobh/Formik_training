import React from "react"
import { useFormik } from "formik"

const initialValues = {
    //step-1: passing initial values, properties must match the form's name attribute
    name: "",
    email: "",
    contact: "", //properties for initialvalues corresponds to the name of the individual fields
}
const onSubmit = (values) => {
    //autiomatically receives form state as its argument
    console.log("form data", values)
}
const validate = (values) => {
    //condition-1: function must return an object
    //values.name, values.email and values .contact
    //condition-1: keys should be equal to that of values object
    //errors.name, errors.email and errors .contact
    //condition-3: alues of these fields should be a string indicating the error message
    //error.name="this field is required"
    let errors = {}
    if (!values.name) {
        errors.name = "Required"
    }
    if (!values.email) {
        errors.email = "Required"
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Invalid email format"
    }
    if (!values.contact) {
        errors.contact = "Required"
    }
    return errors
}

function Form() {
    const formik = useFormik({
        //stage-1
        initialValues,
        //step-2: add onchange and value prop for each form field for tracking and it is where const formik comes into picture
        onSubmit,
        //stage-3
        validate,
    }) //hook-it returns an object that contains properties and methods that helps us to manage form state
    // console.log("form values", formik.values)
    return (
        <div>
            {/*Stage-2*/}
            <form onSubmit={formik.handleSubmit}>
                {/*Step-1 : handleformsubmit is a helper method given by formik*/}
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange} //handlechange is the helper method to update the values's object
                    value={formik.values.name} //formik.value is an object that reflects the state of the form
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="contact">Contact Number</label>
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    onChange={formik.handleChange}
                    value={formik.values.contact}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
/*stage-1  :- MANAGING THE FORM STATE
    step-1: passing initial values, properties must match the form's name attribute
    step-2: add onchange and value prop for each form field for tracking and it is where const formik comes into picture*/

/*stage-2  :-  HANDLING  FORM SUBMISSION
    step1-:  specify onsubmit handler on the form tag
    step-2: revisit the object we passed in to the useformik hook*/

/*Stage-3  :-  VALIDATION AND ERROR MESSAGES (every fields must be entered, if the email is a valid email format or no)
    step-1: specify a peoperty validate
    */
