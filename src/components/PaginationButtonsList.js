import React, { useState } from 'react'
const PaginationButtonsList = ({setPageNum}) => {
    const [isActive, setIsActive] = useState(1);

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const handelClick = (ele) => {
        //     e.target.className="active-btn"
         //console.log(e.target.key)
         setPageNum(ele);
        setIsActive(ele);

        //e.currentTarget.classList.toggle("active-btn")
    }

    return (
        <div className="pagination-buttons-list">
            {arr.map((ele) => <button className={isActive===ele ?"active-btn" : ""}  onClick={()=>handelClick(ele)} id={"button-" + ele} key={ele}>{ele}</button>)}
        </div>
    )
}

export { PaginationButtonsList }