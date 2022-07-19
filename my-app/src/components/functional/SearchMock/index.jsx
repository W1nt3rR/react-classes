import { useState } from "react";

const SearchMock = (props) => {

    const [searchValue, setSearchValue] = useState("");

    return (
        <div>
            <SearchInput value={searchValue} setValue={setSearchValue}></SearchInput>
            <SearchList search={searchValue}></SearchList>
        </div>
    );
}

const SearchInput = (props) => {

    const {value, setValue} = props;

    return <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
}

const SearchList = (props) => {

    const { search } = props;

    const list = [
        {title: "Harry Potter 6"},
        {title: "Game of Thrones"},
        {title: "Lion King"},
        {title: "How to train your dragon"},
        {title: "Kamiondzije"}
    ];

    let searchResult = list.filter(movie => {
        return movie.title.toLowerCase().includes(search.toLowerCase());
    });

    // console.log(searchResult, search);

    return <div>
        {searchResult.map(movie => {
            return <p>{movie.title}</p>;
        })}
    </div>
}

export default SearchMock;