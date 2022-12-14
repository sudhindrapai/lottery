// const baseUrl = "https://41539805-3c3c-4956-a915-281ef555f98c.mock.pstmn.io";
const baseUrl ="http://192.169.179.206:9092"


export const register = `${baseUrl}/kingsrings/auth/signup`; /* Metod: POST */
export const login = `${baseUrl}/kingsrings/auth/login`; /** Method: POST */
export const verifySignin2FA = `${baseUrl}/kingsrings/auth/verify`;
export const updatePassword = `${baseUrl}/kingsrings/api/v1/user/changepassword`; /** /{publicUserId}; Method: POST */
export const forgotPassword = `${baseUrl}/kingsrings/auth/forgotpwd`; /** Method: POST */
export const resetPassword = `${baseUrl}/kingsrings/api/v1/user/resetpwd`; /** /{{publicUserId}} Method: POST */
export const getLotteryList = `${baseUrl}/kingsrings/api/v1/lotterygame/list?lotteryType=C`;
export const getUpcomingLottery = `${baseUrl}/kingsrings/api/v1/lotterygame/list?lotteryType=U`;
export const viewProfile = `${baseUrl}/kingsrings/api/v1/user/list/`; /** {{publicUserId}} */
export const updateProfileImgae = `${baseUrl}/kingsrings/api/v1/user/uploadphoto`;
export const updateProfile = `${baseUrl}/kingsrings/api/v1/user/update/`; /** {{publicUserId}} */
export const updateAddress = `${baseUrl}/kingsrings/api/v1/user/updateaddress/`; /** {{publicUserId}} */
export const toggleTwoFA = `${baseUrl}/kingsrings/api/v1/user/enabledisable2fa/`; /**  */
export const verifyTwoFACode = `${baseUrl}/kingsrings/api/v1/user/verifyenable2faotp`; /** {{publicUserId}} */
// export const purchaseLottery = `${baseUrl}/kingsrings/api/v1/purchaselotteryticket/create`; /** Fixme */
export const purchaseLottery = `${baseUrl}/kingsrings/api/v1/payment/checkout`;
export const getOrdersList = `${baseUrl}/kingsrings/api/v1/purchaseticket/list`; /** ?userId=3 */
export const createAuctionRequest = `${baseUrl}/kingsrings/api/v1/auction/create` /** create auction */
export const getAuctionList = `${baseUrl}/kingsrings/api/v1/auction/list`; /** ?auctionStatus=U */
export const getAuctionDetailById = `${baseUrl}/kingsrings/api/v1/auction/list/`; /** 6 */
export const purchaseAuction = `${baseUrl}/kingsrings/api/v1/purchaseauctionticket/create`;
export const uploadImage = `${baseUrl}/kingsrings/api/v1/file/upload`;
export const getAuctionWinnerList = `${baseUrl}/kingsrings/api/v1/auction/winnerslist`;
export const getPromotions = `${baseUrl}/kingsrings/api/v1/promotion/list`; /** ?promotionPage=LOTTERY */
export const generatePaypalToken = `https://api-m.sandbox.paypal.com/v1/oauth2/token`;
export const createCheckoutNew = `https://api-m.sandbox.paypal.com/v2/checkout/orders`;
export const createNewCapture = 'https://api-m.sandbox.paypal.com/v2/checkout/orders';
export const createPaypalCheckout = `${baseUrl}/kingsrings/api/v1/payment/checkout`;
export const createPaymentComplete = `${baseUrl}/kingsrings/api/v1/payment/complete/`; /* PayerID=Z25MADH6SXGWE */
export const getSubscriptionDetail = `${baseUrl}/kingsrings/api/v1/payment/getsubscription`; /** to get gold membership details  */
export const buyGoldMembership = `${baseUrl}/kingsrings/api/v1/payment/createsubscription`; /**  */;
export const suspendGoldMembership = `${baseUrl}/kingsrings/api/v1/payment/suspendsubscription/I-DVRKN18NJL8B`;
export const reActivateGoldMembership = `${baseUrl}/kingsrings/api/v1/payment/activatesubscription/I-DVRKN18NJL8B`;