import { Link } from "wouter"
import { Book } from "../types"
import { BookCard } from "./bookCard"
import { LIMIT_CARROUSEL } from "../constants"
import { EmptyCard } from "./emptyCard"


interface SectionProps{
    title: string
    books: Book[]
}

export function Section({title, books}: SectionProps){

    return(
        <section className="container mx-auto py-8">
            <Link to={`/category/${title}`} className="cursor-pointer">
                <h3 className="text-left bold text-xl">{title}</h3>
            </Link>
            <Carousel>
                {books.map((book: Book) => (
                    <BookCard book={book} />
                ))}
                {
                    books.length === LIMIT_CARROUSEL && (
                        <Link to={`/category/${title}`} className="hover:bg-cyan-50 cursor-pointer">

                            <EmptyCard title="Ver más"/>
                        </Link>
                    )
                }
            </Carousel>
        </section>
    )
}

function Carousel({children}: {children: React.ReactNode}){
    const scrollLeft = () => {
        const content = document.getElementById("carousel-content")
        if(content)
            content.scrollLeft -= 400;

    }
    const scrollRight = () => {
        const content = document.getElementById("carousel-content")
        if(content)
            content.scrollLeft += 400;
    }
    return (
       <>
            <div id="carousel-content" className="flex flex-row overflow-x-scroll space-x-4">
                {children}
            </div>
       
            {/* <div className="absolute right-0 top-5 ">
                <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
                    {"<"}
                </button>
                <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
                    {">"}
                </button>
            </div> */}
        </>
        
    )
}