import { navigate } from "wouter/use-location";
import SearchBar from "../components/SearchBar";

function Home() {
  const onSearch = (search: string) => {
    navigate(`/items/search/${search}`);
  };

  return (
    <>
      <main className="flex flex-col justify-center align-middle p-10">
        <h1 className="text-4xl">Bazar online</h1>
        <section>
          <SearchBar onSearch={onSearch} />
        </section>
      </main>
    </>
  );
}

export default Home;
