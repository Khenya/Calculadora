import { evaluate } from 'mathjs';

export const c_evaluate = (opration)=>{
    const result = evaluate (opration);
    return result;
}