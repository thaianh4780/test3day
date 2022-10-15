import React from "react";
import { StatusBar } from 'expo-status-bar';

import { Formik } from "formik";

import  {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledFormArea,
    SubTittle,
} from "../components/styles"

const Login = () => {
    return(
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/image/2.png')} ></PageLogo> 
                <PageTitle>Flower Crrib</PageTitle>
                <SubTittle>Account Login</SubTittle>
                <Formik 
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {console.log(values);}} >

                    {(handleChange,handleBlur,HandleSubmit,values) =><StyledFormArea/> }
                </Formik>
        </InnerContainer>
        </StyledContainer>
    );
}

export default Login;


