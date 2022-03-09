const baseUrl = "https://41539805-3c3c-4956-a915-281ef555f98c.mock.pstmn.io";


export const register = `${baseUrl}/kingsrings/auth/signup`; /* Metod: POST */
export const login = `${baseUrl}/kingsrings/auth/login`; /** Method: POST */
export const updatePassword = `${baseUrl}/kingsrings/api/v1/user/changepassword`; /** /{publicUserId}; Method: POST */
export const forgotPassword = `${baseUrl}/kingsrings/auth/forgotpwd`; /** Method: POST */
export const resetPassword = `${baseUrl}/kingsrings/api/v1/user/resetpwd`; /** /{{publicUserId}} Method: POST */