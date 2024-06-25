import { object, string, InferType } from 'yup';

export let RegisterFormSchema = object({
    emailAddress: string().email().required(),
    password: string()
        .required()
        .min(6, 'Password is too short - should be 6 chars minimum.')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
        ),
    name: string().required(),
    lastName: string().required(),
    city: string().required(),
    street: string().required(),
    building: string().required(),
    flat: string().required(),
    postalCode: string().required().matches(/^\d{2}-\d{3}$/, 'Must match number number - number number number'),
    phoneNumber: string().required().length(9).matches(/^[0-9]+$/, 'Must be only digits'),
});
export type RegisterFormProps = InferType<typeof RegisterFormSchema>;
export type RegisterFormPropsKeys = keyof RegisterFormProps;
export type ErrorsRetisterFormProps = {
    [key in RegisterFormPropsKeys]?: string;
}