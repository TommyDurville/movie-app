import Link from "next/link";
import Image from "next/image";

export default function Movie({ id, title, poster_path, release_date, overview }) {
  console.log(poster_path);
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Image src={imagePath + poster_path} width={300} height={450} alt={title} />
      {/* <h1>{title}</h1>
      <p>{overview}</p> */}
    </div>
  );
}
