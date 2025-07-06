import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function Search() {
  const { t } = useTranslation();
  const [showSearch, setShowSearch] = useState(false);
  const refInput = useRef();
  const refSearch = useRef();

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
        <div
          ref={refSearch}
          className="absolute bg-background-main left-0 top-20 flex items-center w-full border p-2 rounded-md border-border-color transition-all duration-300 focus-within:shadow-sm dark:focus-within:shadow-lg"
        >
          <input
            ref={refInput}
            type="text"
            placeholder={t("search")}
            className="px-2 w-full outline-0 placeholder:text-text-second placeholder:text-sm transition-all duration-300"
          />
          <HiMiniMagnifyingGlass />
        </div>
      )}
    </>
  );
}

export default Search;
