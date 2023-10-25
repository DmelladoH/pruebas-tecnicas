import { useParams } from "wouter";
import useProducts from "../hooks/useProducts";
import { Product } from "../types";
import ItemCard from "../components/itemCard";
import SearchBar from "../components/SearchBar";
import { navigate } from "wouter/use-location";

function ItemSearch() {
  const params = useParams();

  const { products, isLoading } = useProducts({ search: params.search });

  const onSearch = (search: string) => {
    navigate(`/items/search/${search}`);
  };

  if (isLoading) return <p>Cargando...</p>;
  return (
    <>
      <header>
        <SearchBar onSearch={onSearch} />
      </header>
      <main>
        <h2>Resultados:</h2>
        <section className="p-3">
          {!products || products.length == 0 ? (
            <p>Lo sentimos, no se ha encontrado ningún producto 🥲 </p>
          ) : (
            <ul className="grid gap-4 p-3">
              {products.map((item: Product) => {
                return (
                  <li key={item.id}>
                    <a href={`/items/${item.id}`}>
                      <ItemCard
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        rating={item.rating}
                        thumbnail={item.thumbnail}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}

export default ItemSearch;
