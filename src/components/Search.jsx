function Search(props){
   
    return (
      <div className="form from-control">
        <input id="search" type="text" onChange={props.handleSearch} style={{borderRadius:"8px",border:"1px solid gray"}} placeholder=" search stories" />
      </div>
    );
};


export default Search;