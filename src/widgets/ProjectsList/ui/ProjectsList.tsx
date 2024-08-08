import {ProjectCart} from "../../../features/ProjectCart";
import {projectCarts} from "../../../features/ProjectCart/model/db.tsx";
import React, {useState} from "react";
import ReactPaginate from "react-paginate";

interface IItemsPerPage{
    itemsPerPage:number
}

export const ProjectsList = ({itemsPerPage}:IItemsPerPage) => {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = projectCarts().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(projectCarts().length / itemsPerPage);
    const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % projectCarts().length;
    setItemOffset(newOffset);
    };
    return (
        <section className="projects dark_text single_page">
            <div className="section_wrap">
                <h1 className="block_title">
                    Проекты
                </h1>
                <div className="projects_items">
                    {currentItems.map((item,index) => {
                        return(
                            <ProjectCart key={`item_${index}`} id={item.id} previewImage={item.previewImage} name={item.name}/>
                        )
                    })}
                </div>

                <div className="pagination">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=""
                        breakClassName="pagination_dots"
                        containerClassName="pagination_wrap"
                        pageClassName="pagination_number"
                        activeClassName="active"
                        previousClassName="pagination_arrow arrow_left"
                        nextClassName="pagination_arrow arrow_right"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={pageCount}
                        previousLabel=" "
                        renderOnZeroPageCount={null}
                    />
                    <a href="" className="btn_more">
                        Показать еще
                    </a>
                </div>
            </div>
        </section>
    )
}