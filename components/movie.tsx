"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProp {
    title: string;
    poster_path: string;
    id: string;
}

export default function Movie({ poster_path, title, id }: IMovieProp) {
    const router = useRouter();
    const goDetail = () => {
        router.push(`/movies/${id}`);
    };
    return (
        <div className={styles.movie}>
            <img
                src={poster_path}
                alt={title}
                onClick={goDetail}
            />
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    );
}
