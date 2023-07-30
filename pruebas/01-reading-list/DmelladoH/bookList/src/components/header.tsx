import { Link } from "wouter";
import { useBooks } from "../hooks/useBooks";

export function Header() {
    const {books, getCategoryList} = useBooks()
    
    return (
        <header>
          <Link to='/'> 
            <h1>Book List</h1>
          </Link>
          <div className='flex my-4 place-content-between'>
            <div className="flex">
              <p>categories</p>
              <div className="flex gap-2 mx-2">
              {
                    Array.from(getCategoryList(books)).map((category, index) => (
                        <Link to={`/category/${category}`} >
                          <p key={index} className="text-sky-800 cursor-pointer hover:underline">
                            {category}
                          </p>
                        </Link>
                    ))
                }
              </div>
            </div>
            <div>
              <Link to='/my-list'>
                <p>My List</p>
              </Link>
            </div>
        </div>
      </header>
    )
}