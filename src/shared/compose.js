/* eslint-disable */
/**
 * All compose does is let you write deeply nested function transformations without the rightward drift of the code. Don't give it too much credit!
 *
 * copied: https://github.com/acdlite/recompose/blob/master/src/packages/recompose/compose.js
 * ----------------------------------------------------------------
 * or you can copy at here:
 * *** https://github.com/reduxjs/redux/blob/master/src/compose.js
 */

const compose = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg);

export default compose;
