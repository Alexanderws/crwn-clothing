import React, { useState } from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview";

import SHOP_DATA from "./shop.data";

const ShopPage = () => {
  const [shopData, setShopData] = useState(SHOP_DATA);

  return (
    <div>
      {shopData.map(({ id, items }) => (
        <CollectionPreview key={id} items={items} />
      ))}
    </div>
  );
};

export default ShopPage;
