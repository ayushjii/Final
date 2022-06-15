import "./searchbar.css";

export default function search(){
    return(
        <div className="search-container">
            <header>
                <h1 className="hone">search bar</h1>
                <form className="search-box">
                    <input type="search"placeholder="What are you looking for?"/>
                </form>
                <p>Search Results:0</p>
            </header>
            <div className="results">
                <div className="result">
                    <h3>Title Goes Here</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro,
                        reiciendis.
                    </p>
                    <a href="#"> Read more </a>
                </div>
            </div>
        </div>
    );
 }