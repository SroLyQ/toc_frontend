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
  console.log(data);
  let refactoredObject = {};
  for (const val in data) {
    let l = [];
    for (const d of data[val]) {
      l.push([d]);
    }
    refactoredObject[val] = l;
  }
  return refactoredObject;
};
