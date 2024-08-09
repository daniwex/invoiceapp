// /  Each ID should be 2 random uppercased letters followed by 4 random numbers.
const months = {
  1: ["Jan", 31],
  2: ["Feb", 28],
  3: ["Mar", 31],
  4: ["Apr", 30],
  5: ["May", 31],
  6: ["June", 30],
  7: ["July", 31],
  8: ["Aug", 31],
  9: ["Sep", 30],
  10: ["Oct", 31],
  11: ["Nov", 30],
  12: ["Dec", 31],
};

export const generateFormId = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const num = "1234567890";
  let result = "";
  for (let i = 0; i < 6; i++) {
    if (i < 2) {
      const randLetters = Math.floor(Math.random() * letters.length);
      result += letters[randLetters];
    } else {
      const randNum = Math.floor(Math.random() * num.length);
      result += num[randNum];
    }
  }
  return result;
};
export function id() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const num = "1234567890";
  let result = "";
  for (let i = 0; i <= 4; i++) {
    if (i < 2) {
      const randLetters = Math.floor(Math.random() * letters.length);
      result += letters[randLetters];
    } else {
      const randNum = Math.floor(Math.random() * num.length);
      result += num[randNum];
    }
  }
  return result;
}

export function getDate(date) {
  // ['2024-08-23', '00:00:00.000Z']
  const m = date.split("T")[0].split("-");
  const year = m[0];
  const month = m[1]
  const day = m[2]
  return `${year}-${month}-${day}`;
}

// export function removeKey(obj, key) {
//   const { [key]: _, ...rest } = obj;
//   return rest;
// }

export function getFullAmount(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const total =
      parseFloat(arr[i].item_number) * parseFloat(arr[i].item_price);
    result += total;
  }
  return result;
}
