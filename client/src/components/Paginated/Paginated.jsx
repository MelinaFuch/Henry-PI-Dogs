import React from "react";
import style from './Paginated.module.css';

const Paginated= ({dogsPerPage, allDogs, paginated}) => {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allDogs / dogsPerPage); i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <nav className={style.nav}>
            <ul className={style.conteiner}>
                {
                    pageNumbers?.map(number => (
                                <button className={style.numbers} key={number} onClick={() => paginated(number)}>{number}</button>
                        )
                    )
                }
            </ul>
        </nav>
    )
}

export default Paginated;
//<li className="number" key={number}></li>