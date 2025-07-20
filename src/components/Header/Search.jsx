import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { createSearchParams, useNavigate } from "react-router-dom";

function Search() {
  const { t } = useTranslation();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const refInput = useRef();
  const refSearch = useRef();
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const params = createSearchParams({ q: searchTerm.trim() });
    navigate({ pathname: "/products", search: `?${params.toString()}` });
    setSearchTerm("");
    setShowSearch(false);
  }

  useEffect(() => {
    if (showSearch) refInput.current?.focus();
  }, [showSearch]);

  return (
    <>
      <div
        className="cursor-pointer bg-background-second rounded-full p-2"
        onClick={() => setShowSearch((prev) => !prev)}
      >
        <HiMiniMagnifyingGlass />
      </div>

      {showSearch && (
        <form
          ref={refSearch}
          className="absolute bg-background-main left-0 top-20 flex items-center w-full border p-2 rounded-md border-border-color focus-within:shadow-sm dark:focus-within:shadow-lg"
          onSubmit={handleSearch}
        >
          <input
            ref={refInput}
            type="text"
            placeholder={t("search")}
            className="px-2 w-full text-lg outline-0 placeholder:text-text-second placeholder:text-sm transition-all duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="cursor-pointer">
            <HiMiniMagnifyingGlass />
          </button>
        </form>
      )}
    </>
  );
}

export default Search;
