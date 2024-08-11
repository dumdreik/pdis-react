import {ProjectCart} from "../../../features/ProjectCart";
import {projectCarts} from "../../../features/ProjectCart/model/db.tsx";
import React, {useState} from "react";
import ReactPaginate from "react-paginate";

interface IItemsPerPage{
    itemsPerPage:number
}

export const ProjectsList = ({itemsPerPage}:IItemsPerPage) => {
    const [itemOffset, setItemOffset] = useState(0);
    const [pageNum, setPageNum] = useState(0);
    const [countShow, setCountShow] = useState(1);
    const endOffset = itemOffset + itemsPerPage;
    const [currentItems, setCurrentItems] = useState(projectCarts().slice(itemOffset, endOffset));
    const pageCount = Math.ceil(projectCarts().length / itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % projectCarts().length;
        setPageNum(event.selected)
        setCountShow(1);
        setItemOffset(newOffset);
        setCurrentItems(projectCarts().slice(newOffset, newOffset + itemsPerPage));
    };

    const handleShowMore = ()=>{
        setCountShow(countShow+1)
        const startShow = pageNum*itemsPerPage
        const endShow = (pageNum+1)*itemsPerPage+itemsPerPage*countShow;
        const slicedProjects = projectCarts().slice(startShow, endShow)
        setCurrentItems(slicedProjects)
        setItemOffset(endOffset + itemsPerPage);
    }
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
                    <button className="btn_more" onClick={handleShowMore}>
                        Показать еще
                    </button>
                </div>
            </div>
        </section>
    )
}