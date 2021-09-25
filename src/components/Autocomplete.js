import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import * as Actions from "../store/actions";

const Autocomplete = (props) => {
  const dispatch = useDispatch();

  const films = useSelector(state => state.films);

  const [suggestions, setSuggestions] = useState([]);
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");
  
  const onChange = e => {
    const input = e.currentTarget.value;
    dispatch(Actions.getListAutoComplete({ ...films.params, s: input })).then((response) => {
        const newFilteredSuggestions = response.map((item) => {
          return item.Title;
      }).filter(
          suggestion =>
            suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
        );
        setFiltered(newFilteredSuggestions);
        setActive(0);
        setIsShow(true);
    });
    
    setInput(e.currentTarget.value);
    props.onChange(e.currentTarget.value);
  };
const onClick = e => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
    props.onChange(e.currentTarget.innerText);
  };
const onKeyDown = e => {
    if (e.keyCode === 13) { // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active])
    }
    else if (e.keyCode === 38) { // up arrow
      return (active === 0) ? null : setActive(active - 1);
    }
    else if (e.keyCode === 40) { // down arrow
      return (active - 1 === filtered.length) ? null : setActive(active + 1);
    }
  };
const renderAutocomplete = () => {
    if (isShow && input && props.isShow) {
      if (filtered.length) {
        return (
          <ul className="autocomplete">
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      }
    }
    return <></>;
  }
  
return (
    <>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder={props.placeholder}
      />
      {renderAutocomplete()}
    </>
  );
}

export default Autocomplete;