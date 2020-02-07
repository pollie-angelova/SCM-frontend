// import { userConstants } from '../_constants'
// import { userService } from '../_services'

// // export actions
// export const userActions = {
//     getAllUsers,
    
// }

// /**
//  * Get delivery status
//  * @return {Function}
//  */
// function getAllUsers() {
//     return dispatch => {
//         dispatch(request())

//         // perform async operation
//         deliveryService.trackDelivery(deliveryId)
//             .then(delivery => {
//                 dispatch(success(delivery))
//             })
//             .catch(error => {
//                 dispatch(failure(error))
//             })
//     }

//     function request() { return { type: deliveryConstants.TRACK_REQUEST } }
//     function success(delivery) { return { type: deliveryConstants.TRACK_SUCCESS, delivery } }
//     function failure(error) { return { type: deliveryConstants.TRACK_FAILURE, error } }
// }


// /**
//  * Get delivery status
//  * @return {Function}
//  */
// function getUserById(userId) {
//     return dispatch => {
//         dispatch(request())

//         // perform async operation
//         deliveryService.trackDelivery(deliveryId)
//             .then(delivery => {
//                 dispatch(success(delivery))
//             })
//             .catch(error => {
//                 dispatch(failure(error))
//             })
//     }

//     function request() { return { type: deliveryConstants.TRACK_REQUEST } }
//     function success(delivery) { return { type: deliveryConstants.TRACK_SUCCESS, delivery } }
//     function failure(error) { return { type: deliveryConstants.TRACK_FAILURE, error } }
// }
