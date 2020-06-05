const arrBuf = new ArrayBuffer(12)

const dv = new DataView(arrBuf)

for (let i = 0; i < 12; ++i) {
  dv.setUint8(i, 12 - i)
}

console.log(dv.getInt8(8))