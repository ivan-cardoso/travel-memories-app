import * as Yup from 'yup'

export const registerValidation = Yup.object({
    name: Yup.string().required("*Required"),
    email: Yup.string()
        .email("*Enter a valid email")
        .required("*Required"),
    description: Yup.string().required("*Required"),
    password: Yup.string()
        .required("*Required")
        .min(8, "*At least 8 characters ")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%])(?=.{8,})/,
            "*Capital letter, number, and special character."
        ),
    // password2: Yup.string()
    //     .required("*Campo requerido")
    //     .oneOf([Yup.ref("password"), null], "*Las contraseñas deben coincidir"),
});

export const loginValidation = Yup.object({
    email: Yup.string()
        .email("*Enter a valid email")
        .required("*Required"),
    password: Yup.string()
        .required("*Required")
    ,
    // password2: Yup.string()
    //     .required("*Campo requerido")
    //     .oneOf([Yup.ref("password"), null], "*Las contraseñas deben coincidir"),
});


