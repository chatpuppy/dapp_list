import React from 'react';
import dapps from '../data/dapps.json';

function Dapps() {
  const size = '2.8rem';

  const handleClick = (url) => {
    window.location.href = url;
  };
  return (
    <>
      <div className="flex flex-col items-start p-[1rem]">
        {/* <div className="flex flex-wrap justify-around p-[1rem]"> */}
        {dapps.map((categroy, index) => {
          return (
            <>
              <div
                key={categroy.category + index}
                className="flex w-full items-center justify-between text-xl text-darkMajor"
              >
                <div className="font-bold">{categroy.category}</div>
                <div className="text-xs text-gray-500">
                  ({categroy.dapps.length})
                </div>
              </div>
              <div className="mb-6 mt-4 grid grid-flow-row grid-cols-5 gap-3">
                {categroy.dapps.map((item, idx) => {
                  return (
                    <div
                      className="w-[3.8rem] flex-col items-center justify-center"
                      key={item.url + idx}
                      onClick={() => handleClick(item.url)}
                    >
                      <div className="m-auto h-fit w-fit rounded-lg bg-white p-2">
                        <img
                          src={item.icon}
                          className="rounded-lg"
                          style={{ width: size, height: size }}
                        ></img>
                      </div>
                      <div className="mt-1 truncate text-xs text-darkMajor">
                        {item.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          );

          // {
          //   categroy.dapps.length > 0 && (
          //     <>
          //       {categroy.dapps.map((item, idx) => {
          //         return (
          //           <div
          //             className="w-[4rem] flex-col items-center justify-center"
          //             key={item.name + idx}
          //             onClick={() => handleClick(item.url)}
          //           >
          //             <img
          //               src={item.icon}
          //               className="m-auto rounded-lg"
          //               style={{ width: size, height: size }}
          //             ></img>
          //             <div className="mt-1 truncate text-xs text-darkMajor">
          //               {item.name}
          //             </div>
          //           </div>
          //         );
          //       })}
          //     </>
          //   );
          // }
        })}
      </div>
    </>
  );
}

export default Dapps;
