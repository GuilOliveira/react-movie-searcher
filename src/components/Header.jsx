function Header(props){
    function updateSearch(){
        props.setSearchedText(props.searchText)
        props.setCurrentPage(1)
    }
    return(
        <header className='headerStyle'>
            <h2 className='mainTitle'>Movies App</h2>
            <div className='searchDiv'>
            <input className='searchBar' 
                onChange={(e) => props.setSearchText(e.target.value)} 
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        updateSearch()
                    }
                  }}
                placeholder='Buscar um filme'/>
            <button className='searchButton' onClick={() => updateSearch() }>🔎</button>
            </div>
        </header>
    )
}

export default Header