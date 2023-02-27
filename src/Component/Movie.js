import React, { useEffect, useState } from "react";
import "./Movie.css"

function Movie() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://www.omdbapi.com/?s=avengers&apikey=278924d5')
            .then(res => res.json())
            .then(fetchData => {
                setData(fetchData.Search)

            })

    }, [])
    console.log(data);
    function getdata(param) {
        console.log(param);
        fetch(`https://www.omdbapi.com/?s=${param}&apikey=278924d5`)
            .then(res => res.json())
            .then(fetchData => {
                setData(fetchData.Search)

            })
    }
    return (
        <div>
            <input type="text" onChange={(e) => getdata(e.target.value)} />
            <div className="Movie">

                {
                    data?.map((item) => <div key={item.imdbID} className="item">
                        {/* <td>{item.Title}</td>
                    <td>{item.Type}</td>
                    <td>{item.Year}</td>
                    <td>{item.imdbID}</td> */}
                        <img src={item.Poster} alt={item.Title} />
                        <h3>{item.Title}  {item.Year}</h3>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Movie;
