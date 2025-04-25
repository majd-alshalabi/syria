'use server';

import AuthValidator from '../validator/validation';

// export const register = async (payload: RegisterUserInput) => {
//     AuthValidator.registerValidator(payload);
//     const {
//         otp: otpString,
//         email,
//         name,
//         password
//     }: { otp: string; email: string; name: string; password: string } = payload;
//     const otp = parseInt(otpString, 10);

//     const existUserByEmail = await UsersRepository.find({ email: email });
//     if (existUserByEmail) {
//         throw new Error('User already registerd');
//     }
//     const existUserByName = await UsersRepository.find({ username: name });
//     if (existUserByName) {
//         throw new Error('username already in use');
//     }
//     const existuserVerified = await VeryfiedRepository.find({ email });

//     if (existuserVerified && existuserVerified.otp === otp) {
//         const newUser = await UsersRepository.create({
//             email,
//             username: name,
//             password,
//             role: ROLE.USER
//         });

//         return {
//             user: { id: newUser.id, name, email, role: newUser.role }
//         };
//     } else {
//         throw new Error('Invalid OTP');
//     }
// };
