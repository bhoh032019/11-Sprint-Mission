import { useEffect, useState } from 'react';
import { getProducts } from '../api';
import ItemCard from './ItemCard';
import '../style/Items.css';
import { ReactComponent as SearchIcon } from '../images/ic_search.svg';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    // Mobile viewport
    return 4;
  } else if (width < 1280) {
    // Tablet viewport
    return 6;
  } else {
    // Desktop viewport
    return 10;
  }
};

function AllItemsSection() {
  const [orderBy, setOrderBy] = useState('recent');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [itemList, setItemList] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [totalPageNum, setTotalPageNum] = useState();

  const fetchSortedData = async ({ orderBy, page, pageSize }) => {
    const products = await getProducts({ orderBy, page, pageSize });
    setItemList(products.list);
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
  };

  useEffect(() => {
    const handleFixsize = () => {
      setPageSize(getPageSize());
    };

    // 화면 크기 변경할 때마다 pageSize를 다시 계산해 넣음
    window.addEventListener('resize', handleFixsize);
    fetchSortedData({ orderBy, page, pageSize });

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleFixsize);
    };
  }, [orderBy, page, pageSize]);

  return (
    <div className="allItemsContainer">
      <div className="allItemsHeader">
        <h1 className="sectionTitle">전체 상품</h1>
        <div className="allItemsSectionHeader">
          <div className="searchBarWrapper">
            <SearchIcon />
            <input
              className="searchBarInput"
              placeholder="검색할 상품을 입력해 주세요"
            />
          </div>
          <button className="itemRegisterbtn">상품 등록하기</button>
        </div>
      </div>

      <div className="allItemsCardSection">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`market-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default AllItemsSection;
