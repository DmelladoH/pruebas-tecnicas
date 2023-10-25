import { useParams } from "wouter";
import useProduct from "../hooks/useProduct";
import { CURRENCY, MAX_RATING } from "../constants";
import Thumbnail from "../components/thumbnail";

function ItemDetail() {
  const params = useParams();
  const product = useProduct({ id: Number(params.id) });
  console.log({ product });

  return (
    <>
      {product.product ? (
        <>
          <main className="grid justify-center mt-6 p-5">
            <div className="flex flex-row gap-4">
              <Thumbnail
                img={product.product.thumbnail}
                alt={product.product.title}
              />
              <div>
                <ul>
                  {product.product.images.map((image: string) => {
                    return (
                      <li className="w-16 h-16 overflow-clip">
                        <img
                          src={image}
                          alt="imagen detalle"
                          width={100}
                          height={100}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <h3>{product.product.title}</h3>
              <div className="flex">
                <div>
                  <strong>
                    {product.product.price}
                    {CURRENCY}
                  </strong>
                  {product.product.stock === 0 && <p>Agotado</p>}
                  {product.product.stock === 1 && <p>1 producto disponible</p>}
                  {product.product.stock > 1 && (
                    <p>{product.product.stock} productos disponibles</p>
                  )}
                </div>
                <p>
                  {product.product.rating}/{MAX_RATING}
                </p>
              </div>
              <p>{product.product.description}</p>
            </div>
          </main>
          <footer className="flex justify-center">
            <button className="p-3 border-1 rounded-xl text-lg text-white bg-fuchsia-800 hover:bg-violet-950">
              Comprar
            </button>
          </footer>
        </>
      ) : (
        <main>
          <section>
            <h2>Lo sentimos, no se ha encontrado ningún producto 🥲 </h2>
          </section>
        </main>
      )}
    </>
  );
}
export default ItemDetail;
