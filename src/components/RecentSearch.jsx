import React from "react";

const RecentSearch = ({recentHistory,setSelectedHistory,setRecentHistory}) => {
    const clearHistory = () => {
    localStorage.clear();
    setRecentHistory("");
  };


  return (
    <>
      <div className="col-span-1  dark:bg-black bg-red-100 pt-5 ">
        <h1 className="dark:text-white text-zinc-800 text-xl mb-3 flex justify-center">
          <span>Recent Searches</span>
          <button className="cursor-pointer pt-1.5 pl-1" onClick={clearHistory}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              className="dark:text-white text-zinc-800"
            >
                
              <path 
              fill="currentColor"
              d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
            </svg>
          </button>
        </h1>
        <ul className="text-left h-190 hover:overflow-auto space-y-2 custom-scrollbar">
          {recentHistory &&
            recentHistory.map((item, index) => (
              <li
                onClick={() => setSelectedHistory(item)}
                key={index}
                className=" px-5 truncate dark:text-zinc-400 text-zinc-800 cursor-pointer dark:hover:bg-zinc-900 dark:hover:text-zinc-200 hover:bg-red-200 hover:text-zinc-800 hover:rounded-md "
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default RecentSearch;
