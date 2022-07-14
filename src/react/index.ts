/*
 * @Author: Y
 * @Date: 2022-07-13
 * @Description: react 特殊处理的一些方式
 */

// react hooks sync  同步设置值 hooks
// import { useState } from 'react';

// export default function useTrait(initialValue: any) {
//   const [trait, updateTrait] = useState(initialValue);

//   let current = trait;

//   const get = () => current;

//   const set = (newValue: any) => {
//     current = newValue;
//     updateTrait(newValue);
//     return current;
//   }

//   return {
//     get,
//     set,
//   }
// }
