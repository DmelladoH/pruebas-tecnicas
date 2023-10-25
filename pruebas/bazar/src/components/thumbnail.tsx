interface Props {
  img: string;
  alt: string;
}

function Thumbnail({ img, alt }: Props) {
  return (
    <div className="rounded-full min-w-[4rem] w-16 h-16 overflow-hidden flex align-middle ">
      <img
        src={img}
        alt={alt}
        width="160px"
        height="160px"
        className="object-cover"
      />
    </div>
  );
}
export default Thumbnail;
