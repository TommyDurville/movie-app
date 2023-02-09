import Image from "next/image";
import { Inter } from "@next/font/google";
import Movie from "./Movie";
import GridContainer from "./GridContainer";
import StyledDiv from "./StyledDiv";
import Link from "next/link";
import * as styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const response = await data.json();
  const firstItem = response.results[0];
  const backdropImage = `https://image.tmdb.org/t/p/original` + firstItem.poster_path;
  console.log(backdropImage);

  return (
    <main style={{ margin: "auto" }}>
      <div style={styles.backdropImage}>
        <Image width={600} height={900} src={`${backdropImage}`} ></Image>
        <h2> {firstItem.original_title} </h2>
        <p> {firstItem.overview} </p>
      </div>

      <GridContainer>
        {response.results.slice(1).map((movie) => (
          <StyledDiv>
            <Link style={{ color: "inherit" }} href={`/${movie.id}`}>
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                overview={movie.overview}
              />
            </Link>
          </StyledDiv>
        ))}
      </GridContainer>
    </main>
  );
}
