import { CURRENCY, MAX_RATING } from "../constants";
import Thumbnail from "./thumbnail";

interface Props {
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
}

function ItemCard({ title, description, price, rating, thumbnail }: Props) {
  return (
    <article className="flex gap-3 flex-row">
      <Thumbnail img={thumbnail} alt={title} />
      <div className="">
        <h3 className="t text-xl font-bold">{title}</h3>
        <p className="t text-sm">{description}</p>
        <div className="flex justify-between mt-2">
          <strong>
            {price}
            {CURRENCY}
          </strong>
          <div>
            {rating}/{MAX_RATING}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ItemCard;
