const strToByte = function (str) {
  const tmp = str.split(''); const
    arr = [];
  for (let i = 0, c = tmp.length; i < c; i++) {
    const j = encodeURI(tmp[i]);
    if (j.length == 1) {
      arr.push(j.charCodeAt());
    } else {
      const b = j.split('%');
      for (let m = 1; m < b.length; m++) {
        arr.push(parseInt(`0x${b[m]}`));
      }
    }
  }
  return arr;
};
export const getCode = (str) => {
  let high;
  let flag;
  let wcrc = 0xffff;
  const data = strToByte(str);
  for (let i = 0; i < data.length; i++) {
    high = wcrc >> 8;
    wcrc = high ^ data[i];
    for (let j = 0; j < 8; j++) {
      flag = wcrc & 0x0001;
      wcrc >>= 1;
      if (flag == 1) {
        wcrc ^= 0xa001;
      }
    }
  }
  return wcrc.toString(16);
};
