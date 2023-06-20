import useAuth from "@/hooks/useAuth";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import Link from "next/link";
import BasicMenu from "./BasicMenu";
import router from "next/router";
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  const list = () => {
    router.push("/MyList");
  };

  const home = () => {
    router.push("/Home");
  };

  const like = () => {
    router.push("/Favourite");
  };

  const search = () => {
    router.push("/search.html");
  };

  const movie = () => {
    router.push("/MyMovie");
  };

  





  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink" onClick={home}>Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink" onClick={movie}>Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink" onClick={list}>My List</li>
          <li className="headerLink" onClick={like}>Favourite</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline " onClick={search}/>
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6 " />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
