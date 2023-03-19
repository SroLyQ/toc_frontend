import "./App.css";

import { CSVLink } from "react-csv";
import { getTemples } from "./actions/temples";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({
    ROY: [],
    RAN: [],
    RAY: [],
    YAL: [],
  });

  const [dataDownload, setdataDownload] = useState([]);

  const [showRanong, setShowRanong] = useState(true);
  const [showRayong, setShowRayong] = useState(true);
  const [showYala, setShowYala] = useState(true);
  const [showRoyed, setShowRoyed] = useState(true);

  useEffect(() => {
    getTemples("ROY,RAN,RAY,YAL", setData);
  }, []);

  useEffect(() => {
    const temp = [];

    if (!showRanong) {
      temp.push(data.RAN);
    }
    if (!showRayong) {
      temp.push(data.RAY);
    }
    if (!showYala) {
      temp.push(data.YAL);
    }
    if (!showRoyed) {
      temp.push(data.ROY);
    }
    console.log(temp);
    setdataDownload(temp);
  }, [showRanong, showRayong, showYala, showRoyed]);

  return (
    <div class="px-80 py-28  bg-[url('bg.jpg')]">
      <ul class="grid w-full gap-6 md:grid-cols-2 ">
        <li className="">
          <input
            type="checkbox"
            id="ranong-option"
            value=""
            class="hidden peer"
            required=""
            onClick={() => setShowRanong(!showRanong)}
          />
          <label
            for="ranong-option"
            class="inline-flex items-center justify-between w-full h-80 border-8 text-white border-white bg-white  rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-[#C8A251] hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div
              class={`${
                showRanong ? "block" : "hidden"
              }  w-full bg-[url('ranong.jpg')] bg-cover bg-center h-full `}>
              <div class="w-full text-6xl text-center py-[122px] bg-black bg-opacity-30">
                ระนอง
              </div>
            </div>

            <div
              class={`${
                showRanong ? "hidden" : "display"
              } overflow-auto  h-full grid grid-cols-3 w-full`}>
              {data?.RAN?.slice(1).map((val) => (
                <div class="text-ellipsis">{val}</div>
              ))}
            </div>
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="rayong-option"
            class="hidden peer"
            required=""
            onClick={() => setShowRayong(!showRayong)}
          />
          <label
            for="rayong-option"
            class=" inline-flex items-center justify-between w-full h-80  border-8 peer-checked:border-8 text-white border-white bg-white  rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-[#C8A251] hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div
              class={`${
                showRayong ? "block" : "hidden"
              }  w-full bg-[url('rayong.jpg')] bg-cover bg-center h-full  `}>
              <div class="w-full text-6xl text-center py-[122px] bg-black bg-opacity-30">
                ระยอง
              </div>
            </div>
            <div
              class={`${
                showRayong ? "hidden" : "display"
              } overflow-auto h-full grid grid-cols-3 w-full`}>
              {data?.RAY?.slice(1).map((val) => (
                <div>{val}</div>
              ))}
            </div>
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="yala-option"
            class="hidden peer"
            onClick={() => setShowYala(!showYala)}
          />
          <label
            for="yala-option"
            class=" inline-flex items-center justify-between w-full h-80  border-8 peer-checked:border-8 text-white border-white bg-white  rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-[#C8A251] hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div
              class={`${
                showYala ? "block" : "hidden"
              }  w-full bg-[url('raya.jpg')] bg-cover bg-center h-full  `}>
              <div class="w-full text-6xl text-center py-[122px] bg-black bg-opacity-30">
                ยะลา
              </div>
            </div>

            <div
              class={`${
                showYala ? "hidden" : "display"
              } overflow-auto  h-full grid grid-cols-3 w-full`}>
              {data?.YAL?.slice(1).map((val) => (
                <div>{val}</div>
              ))}
            </div>
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="royed-option"
            class="hidden peer"
            onClick={() => setShowRoyed(!showRoyed)}
          />
          <label
            for="royed-option"
            class=" inline-flex items-center justify-between w-full h-80  border-8 peer-checked:border-8 text-white border-white bg-white  rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-[#C8A251] hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div
              class={`${
                showRoyed ? "block" : "hidden"
              }  w-full bg-[url('royed.jpg')] bg-cover bg-center h-full  `}>
              <div class="w-full text-6xl text-center py-[122px] bg-black bg-opacity-30">
                ร้อยเอ็ด
              </div>
            </div>

            <div
              class={`${
                showRoyed ? "hidden" : "display"
              } overflow-auto h-full grid grid-cols-3 w-full`}>
              {data?.ROY?.slice(1).map((val) => (
                <div>{val}</div>
              ))}
            </div>
          </label>
        </li>
      </ul>

      <div class="flex flex-row-reverse pt-4">
        <button
          type="button"
          class="focus:outline-none  w-44 h-16  text-white bg-green-600 border-4 hover:bg-green-300 focus:ring-4 font-medium rounded-lg text-3xl ">
          <CSVLink filename="temple.csv" data={dataDownload} target="_blank">
            ดาวน์โหลด
          </CSVLink>
        </button>
      </div>
    </div>
  );
}

export default App;
