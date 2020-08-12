import React from 'react'

const page = {
    position: "absolute",
    bottom: "-160px"
};

const Pagination = ({postPerPage, totalPost, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav style={page}>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick = {() => paginate(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;