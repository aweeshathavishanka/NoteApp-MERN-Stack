import ProfileInfo from "./ProfileInfo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };
  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white drop-shadow">
      <h1 className=" text-xl font-semibold text-[#0e0cff] py-2">Notes</h1>
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default NavBar;
