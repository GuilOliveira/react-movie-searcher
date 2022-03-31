
function PageNavigation(props){
    if(props.pageNumber===props.currentPage){
        return(
            <div key={props.pageNumber}>
            <button className="selectedPageButton">{props.pageNumber}</button>
        </div>
        )
    }
    return(
        <div key={props.pageNumber}>
            <button className="pageButton" onClick={() => {props.setCurrentPage(props.pageNumber)}}>{props.pageNumber}</button>
        </div>
    )
}

export default PageNavigation