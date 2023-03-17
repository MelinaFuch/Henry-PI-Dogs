import React, {useState} from "react";
import style from './Paginated.module.css';

const Paginated= ({dogsMax, currentPage, paginated}) => {
    const pageNumbers = [];
    const [input, setInput] = useState(1);
    const nextPage = () => {
        setInput(input + 1);
        paginated(currentPage + 1);
    };
    const previusPage = () => {
        setInput(input - 1);
        paginated(currentPage - 1);
    };

    const firstPage = () => {
        setInput(1);
        paginated(1);
    };

    const lastPage = () => {
        setInput(dogsMax);
        paginated(dogsMax);
    };

    for (let i = 0; i < dogsMax; i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <nav className={style.nav}>
            <ul className={style.conteiner}>
                {
                    pageNumbers?.map((number, index) => (
                                <button className={
                                    index === currentPage - 1 ?
                                    style.active :
                                    style.numbers
                                } 
                                key={number} 
                                onClick={() => paginated(number)}>
                                    {" "}
                                    {number}{" "}
                                </button>
                        )
                    )
                }
            </ul>
        </nav>
    )
}

//                         className={
//                             index === currentPage - 1
//                             ? styles.buttonPaginatedActive
//                             : styles.buttonPaginated
//                         }
//                         onClick={() => paginated(number)}
//                     >
//                         {" "}
//                         {number}{" "}
//                     </button>
//                 </li>
//                 ))}
//             </ul>

export default Paginated;

// import React, { useState } from "react";
// import styles from "./Paginated.module.css";

// function Paginated({ dogsMax, paginated, currentPage }) {
//     const [input, setInput] = useState(1);
//     const pageNumber = [];
//     const nextPage = () => {
//         setInput(input + 1);
//         paginated(currentPage + 1);
//     };
//     const previusPage = () => {
//         setInput(input - 1);
//         paginated(currentPage - 1);
//     };

//     const firstPage = () => {
//         setInput(1);
//         paginated(1);
//     };

//     const lastPage = () => {
//         setInput(dogsMax);
//         paginated(dogsMax);
//     };

//     for (let i = 0; i < dogsMax; i++) {
//         pageNumber.push(i + 1);
//     }
//     return (
//         <div className={styles.paginado}>
//             <button
//                 title="firstPage"
//                 onClick={firstPage}
//                 className={
//                     currentPage === 1 || currentPage < 1 ?
//                     styles.disabled :
//                     styles.buttonPaginated
//                 }
//                 disabled={currentPage === 1 || currentPage < 1}
//             >
//                 {"<<"}
//             </button>
//             <button
//                 title="previusPage"
//                 onClick={previusPage}
//                 className={
//                     currentPage === 1 || currentPage < 1 ?
//                     styles.disabled :
//                     styles.buttonPaginated
//                 }
//                 disabled={currentPage === 1 || currentPage < 1}
//             >
//                 {"<"}
//             </button>
//             <ul className={styles.paginacion}>
//                 {pageNumber?.map((number, index) => (
//                 <li key={index} className={styles.numberPaginado}>
//                     <button
//                         className={
//                             index === currentPage - 1
//                             ? styles.buttonPaginatedActive
//                             : styles.buttonPaginated
//                         }
//                         onClick={() => paginated(number)}
//                     >
//                         {" "}
//                         {number}{" "}
//                     </button>
//                 </li>
//                 ))}
//             </ul>
//             <button
//                 title="nextPage"
//                 onClick={nextPage}
//                 className={
//                     currentPage === dogsMax || currentPage >= dogsMax ?
//                     styles.disabled :
//                     styles.buttonPaginated
//                 }
//                 disabled={currentPage === dogsMax || currentPage >= dogsMax}
//             >
//                 {">"}
//             </button>
//             <button
//                 title="lastPage"
//                 onClick={lastPage}
//                 className={
//                     currentPage === dogsMax || currentPage >= dogsMax ?
//                     styles.disabled :
//                     styles.buttonPaginated
//                 }
//                 disabled={currentPage === dogsMax || currentPage >= dogsMax}
//             >
//                 {">>"}
//             </button>
//         </div>
//     );
// }

// export default Paginated;