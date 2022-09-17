export function addN(dispatch, n) {
    dispatch({type: 'addN', payload : { number: n}})
}