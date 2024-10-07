import { useEffect, useState } from 'react';
import { getProducts } from '../api';
import ItemCard from './ItemCard';
import '../style/Items.css';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    // Mobile viewport
    return 1;
  } else if (width < 1280) {
    // Tablet viewport
    return 2;
  } else {
    // Desktop viewport
    return 4;
  }
};

function BestItemSection() {
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const fetchSortedData = async ({ orderBy, pageSize }) => {
    const products = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    const handleFixsize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener('resize', handleFixsize);
    fetchSortedData({ orderBy: 'favorite', pageSize });

    return () => {
      window.removeEventListener('resize', handleFixsize);
    };
  }, [pageSize]);

  return (
    <div className="bestItemsContainer">
      <h1 className="sectionTitle">베스트 상품</h1>

      <div className="bestItemsCard">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default BestItemSection;
