// /  Each ID should be 2 random uppercased letters followed by 4 random numbers.

export const generateId = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const num = '1234567890'
    let result = ''
    for(let i=0;i<6;i++){
        if(i < 2){
            const randLetters = Math.floor(Math.random * letters.length)
            result += letters[randLetters]
        }
        else{
            const randNum = Math.floor(Math.random * num.length)
            result += num[randNum]
        }
    }
    return result
}
export function id()  {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const num = '1234567890'
    let result = ''
    for(let i=0;i<=4;i++){
        if(i < 2){
            const randLetters = Math.floor(Math.random() * letters.length)
            result += letters[randLetters]
        }
        else{
            const randNum = Math.floor(Math.random() * num.length)
            result += num[randNum]
        }
    }
    return result
}