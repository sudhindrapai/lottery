// const baseUrl = "https://41539805-3c3c-4956-a915-281ef555f98c.mock.pstmn.io";
const baseUrl ="http://192.169.179.206:9092"


export const register = `${baseUrl}/kingsrings/auth/signup`; /* Metod: POST */
export const login = `${baseUrl}/kingsrings/auth/login`; /** Method: POST */
export const updatePassword = `${baseUrl}/kingsrings/api/v1/user/changepassword`; /** /{publicUserId}; Method: POST */
export const forgotPassword = `${baseUrl}/kingsrings/auth/forgotpwd`; /** Method: POST */
export const resetPassword = `${baseUrl}/kingsrings/api/v1/user/resetpwd`; /** /{{publicUserId}} Method: POST */
export const getLotteryList = `${baseUrl}/kingsrings/api/v1/lottery/list`;
export const viewProfile = `${baseUrl}/kingsrings/api/v1/user/list/`; /** {{publicUserId}} */
export const updateProfileImgae = `${baseUrl}/kingsrings/api/v1/user/uploadphoto`;
export const updateProfile = `${baseUrl}/kingsrings/api/v1/user/update/`; /** {{publicUserId}} */
export const updateAddress = `${baseUrl}/kingsrings/api/v1/user/updateaddress/`; /** {{publicUserId}} */
export const toggleTwoFA = `${baseUrl}/kingsrings/api/v1/user/enabledisable2fa/`; /**  */
export const verifyTwoFACode = `${baseUrl}/kingsrings/api/v1/user/verifyenable2faotp`; /** {{publicUserId}} */