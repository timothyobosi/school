
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { dummyLogin } from '../../services/auth';
import type { LoginFormData } from '../../types/auth';

//validation schema
const schema = yup.object().shape({
    email : yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),    
});

const LoginForm: React.FC = () => {
    const { register, handleSubmit, formState: {errors, isSubmitting}} = useForm<LoginFormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: LoginFormData) => {
        const response = await dummyLogin(data);
        alert(response.message);// TO Be replaced with proper UI feedback
    };

    return (
        <Box sx = {{maxWidth: 400, mx: 'auto', mt: 4, p:2}}>
            <Typography variant="h4" gutterBottom> Login</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email ?.message}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password ?.message}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{mt:2}}
                    disabled={isSubmitting}
                    >
                        {isSubmitting ? <CircularProgress size={24}/>: 'Login'}
                </Button>
            </form>
        </Box>



    )

    
};

export default LoginForm;