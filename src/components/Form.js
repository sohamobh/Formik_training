import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

// const validate = (values) => {
//     // condition-1: function must return an object
//     // values.name, values.email and values .contact
//     // condition-1: keys should be equal to that of values object
//     // errors.name, errors.email and errors .contact
//     // condition-3: alues of these fields should be a string indicating the error message
//     // error.name="this field is required"
//     let errors = {}
//     if (!values.name) {
//         errors.name = "Required"
//     }
//     if (!values.email) {
//         errors.email = "Required"
//     } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//     ) {
//         errors.email = "Invalid email format"
//     }
//     if (!values.contact) {
//         errors.contact = "Required"
//     } else if (values.contact.length < 10 || values.contact.length > 10) {
//         errors.contact = "Contact number must have 10 digits only"
//     }
//     return errors
// }

function Form() {
    const formik = useFormik({
        //stage-1
        initialValues: {
            //step-1: passing initial values, properties must match the form's name attribute
            name: "",
            email: "",
            contact: "", //properties for initialvalues corresponds to the name of the individual fields
        },
        //step-2: add onchange and value prop for each form field for tracking and it is where const formik comes into picture
        onSubmit: (values) => {
            //autiomatically receives form state as its argument
            alert(JSON.stringify(values, null, 2))
        },
        //stage-3
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Name should be 15 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required"),
            contact: Yup.string()
                .max(12, "Too long.. Enter 10 digits only")
                .min(10, "Too short.. Enter atleast 10 digits")
                .required("Required"),
        }), //hook-it returns an object that contains properties and methods that helps us to manage form state
        // console.log("form values", formik.values)
    })
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
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange} //handlechange is the helper method to update the values's object
                    value={formik.values.name} //formik.value is an object that reflects the state of the form
                />
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <label htmlFor="contact">Contact Number</label>
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.contact}
                />
                {formik.touched.contact && formik.errors.contact ? (
                    <div>{formik.errors.contact}</div>
                ) : null}

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
