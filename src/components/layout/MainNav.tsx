import Link from "next/link";
import React from "react";
import MovieIcon from "../icons/MovieIcon";
import Search from "../ui/Search";

function MainNav() {
  return (
    <nav className="flex items-center justify-between bg-gradient-to-r from-slate-800 to-gray-900 p-2 rounded-md px-4">
      <div className="flex gap-4 items-center">
        <Link href="/" className="font-semibold text-lg">
          Nexus
        </Link>
        <div>
          <ul className="flex gap-3 items-center text-sm">
            <li>
              <Link href="/movies" className="flex items-center gap-1">
                <MovieIcon size="w-4 h-4" color="text-slate-100" />
                <span>Movies</span>
              </Link>
            </li>
            <li>
              <Link href="/series" className="flex items-center gap-2">
                <span>Series</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Search />
      </div>
    </nav>
  );
}

export default MainNav;
