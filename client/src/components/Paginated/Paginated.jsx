import React from "react";

const Paginated= ({dogsPerPage, allDogs, paginated}) => {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allDogs / dogsPerPage); i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <nav>
            <ul>
                {
                    pageNumbers?.map(number => (
                                <button onClick={() =>paginated(number)}>{number}</button>
                        )
                    )
                }
            </ul>
        </nav>
    )
}

export default Paginated;
//<li className="number" key={number}></li>