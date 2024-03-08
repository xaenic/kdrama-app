"use client";

import { useRef, useState } from "react";

const Search = () => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className=" px-3 relative bg-slate-800 flex items-center p-2 rounded-md ">
      <label
        onClick={() => {
          setActive(true);
          if (ref.current) {
            ref.current.focus();
          }
        }}
        className={`py-1 cursor-pointer absolute text-xs text-slate-500 w-full ${
          active ? "hidden" : ""
        }`}
      >
        Search k-drama series...
      </label>
      <input
        ref={ref}
        type="text"
        onBlur={() => setActive(false)}
        className="text-white text-sm bg-transparent w-full outline-none"
      />
    </div>
  );
};

export default Search;
