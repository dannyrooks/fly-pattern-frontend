// export default (state = { patterns: [], loading: false }, action) => {

//     switch(action.type) {
//         case "LOADING_SAVED_PATTERNS":
//             return {
//                 ...state,
//                 loading: true
//             }
            
//         case "PATTERNS_LOADED":
//             return {
//                 ...state,
//                 patterns: action.payload,
//                 loading: false
//             }

//         case "ADD_PATTERN":
//             return {
//                 ...state,
//                 loading: true
//             }        

//         case "PATTERN_ADDED":
//             return {
//                 ...state,
//                 patterns: [...state.patterns, action.payload],
//                 loading: false
//             }

//         default:
//             return state
//     }
// }