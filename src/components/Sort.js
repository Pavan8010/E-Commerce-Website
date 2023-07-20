import React from 'react'
import styled from 'styled-components';
import {BsFillGridFill,BsList} from 'react-icons/bs'
import { useFilterContext } from '../context/Filter_Context';
const Sort = () => {
  const {grid_view,setGridView,setListView,sorting} = useFilterContext();
  // const len = (filter_products).length;
  return (
    <Wrapper className='sort-section'>
      {/* First Column */}
      <div className="sorting-list--grid">
        <button className={grid_view ? 'active sort-btn' : 'sort-btn'}
        onClick={setGridView}
        >
          <BsFillGridFill className='icon'/>
        </button>
        <button className={grid_view ? 'sort-btn' : 'active sort-btn'}
          onClick={setListView}
        >
          <BsList className='icon'/>
        </button>
      </div>

      {/* Second Column */}
      <div className="product-data">
        {/* <p>{`${len} Products Available`}</p> */}
        <p>{`12 Products Available`}</p>
        {/* <p>{`${filter_products.length} Product Available`}</p> */}
      </div>

      {/* Third Column */}
      <div className="sort-selection">
        <div className="sort-selection">
          <form action="#">
            <label htmlFor="sort"></label>
            <select 
              name="sort" 
              id="sort" 
              className="sort-selection--style" 
              onChange={sorting}
            >
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price(a-z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon{
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort
