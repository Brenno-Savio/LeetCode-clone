"use client"


const Ipad = () => {
  return (
    <div className="w-[414px] h-[284px] bg-white rounded-3xl flex items-center justify-center">
      <div className="w-[82%] h-[90%] flex flex-row justify-between bg-tertiary rounded-md">
        <div className="h-[100%] w-[100%] border border-tertiary-alt flex flex-col items-center justify-center bg-tertiary">
          <div className="flex flex-row items-center w-[100%] justify-between row-span-4 bg-tertiary">
            <div className="bg-gradient-to-b from-blue-300 w-[55px] rounded-md h-[55px] mx-1 bg-blue-400"></div>
            <div className="bg-gradient-to-b from-green-300 w-[55px] rounded-md h-[55px] mx-1 bg-green-400"></div>
            <div className="bg-gradient-to-b from-yellow-300 w-[55px] rounded-md h-[55px] mx-1 bg-yellow-400"></div>
            <div className="bg-gradient-to-b from-red-300 w-[55px] rounded-md h-[55px] mx-1 bg-red-400"></div>
          </div>
          <div className="bg-tertiary pt-5 flex flex-col w-[95%] col-span-6">
            <span className="bg-white border-tertiary-alt border flex justify-between items-center h-[26px]">
              <span className="bg-gray-200 w-[30%] h-[7px]"></span>
              <span className="w-[9px] h-[4px] mr-2 rounded-md bg-green-400"></span>
            </span>
            <span className="bg-white border-tertiary-alt border flex justify-between items-center h-[26px]">
              <span className="bg-gray-200 w-[25%] h-[7px]"></span>
              <span className="w-[9px] h-[4px] mr-2 rounded-md bg-red-400"></span>
            </span>
            <span className="bg-white border-tertiary-alt border flex justify-between items-center h-[26px]">
              <span className="bg-gray-200 w-[20%] h-[7px]"></span>
              <span className="w-[9px] h-[4px] mr-2 rounded-md bg-yellow-300"></span>
            </span>
            <span className="bg-white border-tertiary-alt border flex justify-between items-center h-[26px]">
              <span className="bg-gray-200 w-[35%] h-[7px]"></span>
              <span className="w-[9px] h-[4px] mr-2 rounded-md bg-green-400"></span>
            </span>
            <span className="bg-white border-tertiary-alt border flex justify-between items-center h-[26px]">
              <span className="bg-gray-200 w-[15%] h-[7px]"></span>
              <span className="w-[9px] h-[4px] mr-2 rounded-md bg-red-400"></span>
            </span>
            <span className="bg-white border-tertiary-alt border flex justify-between items-center h-[26px]">
              <span className="bg-gray-200 w-[25%] h-[7px]"></span>
              <span className="w-[9px] h-[4px] mr-2 rounded-md bg-green-400"></span>
            </span>
          </div>
        </div>
        <div className="border w-[100%] h-[100%] bg-white items-center justify-center flex flex-col">
          <div className="w-full items-center justify-center flex flex-col">
            <div className="bg-slate-400 rounded-t-xl w-[80%] h-[15px] my-1"></div>
            <div className="flex items-center justify-center w-[30%] h-[30px]">
              {/* <PieChart /> */}
            </div>
            <div className="bg-slate-300 rounded-b-xl w-[80%] h-[15px] my-1"></div>
          </div>
          <div className="w-full items-start justify-center flex flex-col my-3 pl-3">
            <div className="bg-slate-200 rounded-xl w-[80%] h-[5px] my-[3px]"></div>
            <div className="bg-slate-200 rounded-xl w-[50%] h-[5px] my-[3px]"></div>
            <div className="bg-slate-200 rounded-xl w-[55%] h-[5px] my-[3px]"></div>
            <div className="bg-slate-200 rounded-xl w-[35%] h-[5px] my-[3px]"></div>
          </div>
          <div className="w-full items-start justify-center flex flex-col my-3 pl-3">
            <div className="bg-slate-200 rounded-xl w-[70%] h-[5px] my-[3px]"></div>
            <div className="bg-slate-200 rounded-xl w-[60%] h-[5px] my-[3px]"></div>
            <div className="bg-slate-200 rounded-xl w-[30%] h-[5px] my-[3px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ipad;
