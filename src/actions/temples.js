import axios from "axios";

export async function getTemples(param, callback) {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/gettemple?p=${param}`
    );
    // console.log(refactorObject(response?.data?.data));
    callback(refactorObject(response?.data?.data));
  } catch (error) {
    console.log(error);
  }
}

const refactorObject = (data) => {
  let refactoredObject = {};
  console.log(data);
  for (const val in data) {
    let l = [];
    if (val === "ROY") {
      l.push(["ร้อยเอ็ด"]);
    } else if (val === "RAN") {
      l.push(["ระนอง"]);
    } else if (val === "RAY") {
      l.push(["ระยอง"]);
    } else if (val === "YAL") {
      l.push(["ยะลา"]);
    }
    for (const d of data[val]) {
      l.push([d]);
    }
    refactoredObject[val] = l;
  }
  return refactoredObject;
};
