import { useState } from "react";

interface Props {
  onSearch: (search: string) => void;
}
function SearchBar({ onSearch }: Props) {
  const [search, serSearch] = useState<string>("");

  const onSubmit = () => {
    onSearch(search);
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2 align-middle">
      <input
        className="rounded-sm border-neutral-500 border-2 p-1 w-full"
        placeholder="laptops, smartPhones, ..."
        value={search}
        onChange={(event) => serSearch(event.target.value)}
      ></input>
      <div className="flex align-middle">
        <button type="submit" className="border-2 border-neutral-500 p-1">
          🔍
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
