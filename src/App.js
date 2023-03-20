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

  const [filename, setFilename] = useState([]);

  useEffect(() => {
    getTemples("ROY,RAN,RAY,YAL", setData);
  }, []);

  useEffect(() => {
    const temp = [];
    const fn = [];

    if (!showRanong) {
      temp.push("RAN");
      fn.push("ระนอง");
    }
    if (!showRayong) {
      temp.push("RAY");
      fn.push("ระยอง");
    }
    if (!showYala) {
      temp.push("YAL");
      fn.push("ยะลา");
    }
    if (!showRoyed) {
      temp.push("ROY");
      fn.push("ร้อยเอ็ด");
    }
    const max = Math.max(
      data.RAN.length,
      data.RAY.length,
      data.ROY.length,
      data.YAL.length
    );
    const dodata = [];
    for (let i = 0; i < max; i++) {
      const temp2 = [];
      temp.forEach((pv) => {
        if (data[pv][i]) {
          temp2.push(data[pv][i]);
        } else {
          temp2.push("");
        }
      });
      dodata.push(temp2);
    }
    setFilename(fn);
    setdataDownload(dodata);
  }, [showRanong, showRayong, showYala, showRoyed]);

  return (
    <div className="caret-transparent">
      <div className="px-80 pb-20 pt-14 bg-[url('bg.jpg')]">
        <div className="mx-auto flex justify-center items-center text-4xl text-[#086D63] mb-5 bg-white/90 cursor-default w-1/2 h-20 rounded-xl">
          เลือกจังหวัดที่คุณต้องการรายชื่อวัด
        </div>
        <ul className="grid w-full gap-6 md:grid-cols-2 ">
          <li className="relative">
            <input
              type="checkbox"
              id="ranong-option"
              value=""
              className="hidden peer"
              required=""
              onClick={() => setShowRanong(!showRanong)}
            />
            <label
              htmlFor="ranong-option"
              className="inline-flex items-center justify-between w-full h-80 border-8 text-white border-white bg-white  rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-[#C8A251] dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div
                className={`${
                  showRanong ? "block" : "hidden"
                }  w-full bg-[url('ranong.jpg')] bg-cover bg-center h-full hover:brightness-75 transition-all`}
              >
                <div className="w-full text-6xl text-center py-[122px] bg-black bg-opacity-30">
                  ระนอง
                </div>
              </div>

              <div
                className={`relative ${
                  showRanong ? "hidden" : "display"
                } overflow-auto  h-full grid grid-cols-3 w-full px-5 py-2`}
              >
                {data?.RAN?.slice(1).map((val) => (
                  <div className="text-ellipsis" key={val}>
                    {val}
                  </div>
                ))}
              </div>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="rayong-option"
              className="hidden peer"
              required=""
              onClick={() => setShowRayong(!showRayong)}
            />
            <label
              htmlFor="rayong-option"
              className=" inline-flex items-center justify-between w-full h-80  border-8 peer-checked:border-8 text-white border-white bg-white  rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-[#C8A251] dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div
                className={`${
                  showRayong ? "block" : "hidden"
                }  w-full bg-[url('rayong.jpg')] bg-cover bg-center h-full hover:brightness-75 transition-all `}
              >
                <div className="w-full text-6xl text-center py-[122px] bg-black bg-opacity-30">
                  ระยอง
                </div>
              </div>
              <div
                className={`${
                  showRayong ? "hidden" : "display"
                } overflow-auto h-full grid grid-cols-3 w-full px-5 py-2`}
              >
                {data?.RAY?.slice(1).map((val) => (
                  <div key={val}>{val}</div>
                ))}
              </div>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="yala-option"
              className="hidden peer"
              onClick={() => setShowYala(!showYala)}
            />
            <label
              htmlFor="yala-option"
              className=" inline-flex items-center justify-between w-full h-80  border-8 peer-checked:border-8 text-white border-white bg-white  rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-[#C8A251] dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div
                className={`${
                  showYala ? "block" : "hidden"
                }  w-full bg-[url('raya.jpg')] bg-cover bg-center h-full hover:brightness-75 transition-all `}
              >
                <div className="w-full text-6xl text-center py-[122px] bg-black bg-opacity-30">
                  ยะลา
                </div>
              </div>

              <div
                className={`${
                  showYala ? "hidden" : "display"
                } overflow-auto  h-full grid grid-cols-3 w-full px-5 py-2`}
              >
                {data?.YAL?.slice(1).map((val) => (
                  <div key={val}>{val}</div>
                ))}
              </div>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="royed-option"
              className="hidden peer"
              onClick={() => setShowRoyed(!showRoyed)}
            />
            <label
              htmlFor="royed-option"
              className=" inline-flex items-center justify-between w-full h-80  border-8 peer-checked:border-8 text-white border-white bg-white  rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-[#C8A251] dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div
                className={`${
                  showRoyed ? "block" : "hidden"
                }  w-full bg-[url('royed.jpg')] bg-cover bg-center h-full hover:brightness-75 transition-all `}
              >
                <div className="w-full text-6xl text-center py-[122px] bg-black bg-opacity-30">
                  ร้อยเอ็ด
                </div>
              </div>

              <div
                className={`${
                  showRoyed ? "hidden" : "display"
                } overflow-auto h-full grid grid-cols-3 w-full px-5 py-2`}
              >
                {data?.ROY?.slice(1).map((val) => (
                  <div key={val}>{val}</div>
                ))}
              </div>
            </label>
          </li>
        </ul>

        <div className="flex pt-4 justify-end">
          {filename.length ? (
            <div className="mr-5 text-2xl self-center text-white bg-zinc-800/80 rounded-md py-3 px-5">
              {filename.join("_")}.csv
            </div>
          ) : null}
          <CSVLink
            filename={`${filename.join("_")}`}
            data={dataDownload}
            onClick={(e) => {
              return filename.length ? true : false;
            }}
            target="_blank"
            className={`flex justify-center items-center w-44 h-16 border-4 text-3xl border-white transition-all font-medium rounded-lg ${
              filename.length
                ? "text-white bg-green-600 hover:bg-white hover:text-green-600"
                : "bg-zinc-500 brightness-50 text-white cursor-default"
            }`}
          >
            ดาวน์โหลด
          </CSVLink>
        </div>
      </div>
      <div className="w-full bg-[#086D63] border-t-8 h-64 flex justify-center items-center">
        <div className="w-2/3 flex justify-around text-white text-lg">
          <div className="">
            <div className="text-2xl mb-2">รายชื่อสมาชิก</div>
            <div className="flex ml-3">
              <div>
                <div>63010136 จิรกานต์ กุลสิงห์</div>
                <div>63010200 ชยุต พูลเพ็ชร์</div>
                <div>63010225 ชานน กิจบรรณเดช</div>
                <div>63010277 ณพงศ์ เคหะ</div>
                <div>63010299 ณัฏฐณิชา เสนทา</div>
              </div>
              <div className="ml-7">
                <div>63010332 ณัฐพล จำปานนท์</div>
                <div>63010394 ธนกฤต ทองหล่อ</div>
                <div>63010979 สิรินดา วังแฟน</div>
                <div>63010981 สิรินุช เกตุคำ</div>
                <div>63011086 อิสระ ผดุงประเสริฐกุล</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-2xl mb-2">Link งานทั้งหมด</div>
            <ul className="list-disc">
              <li className="underline underline-offset-2 ml-7">
                <a href="" className="underline underline-offset-2">
                  ไฟล์ CSV รวมรายชื่อวัดทั้งหมด
                </a>
              </li>
              <li className="underline underline-offset-2 ml-7">
                <a
                  href="https://github.com/phaiEZ/toc_frontend.git"
                  target="_blank"
                >
                  Source Code - Frontend
                </a>
              </li>
              <li className="underline underline-offset-2 ml-7">
                <a
                  href="https://github.com/stsnx/temple_of_TOC.git"
                  target="_blank"
                >
                  Source Code - Backend
                </a>
              </li>
              <li className="underline underline-offset-2 ml-7">
                <a
                  href="https://docs.google.com/document/d/1PZ_YFGYDAitRpAcaWAT5IKA9nc-w7sAv2SU_Qr0NqHI/edit?usp=sharing"
                  target="_blank"
                >
                  สรุป Regular Expressions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
