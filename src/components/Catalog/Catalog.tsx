import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getModelsList } from '../../utils/api/catalog+categories.api';
import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';

interface ICatalog {
  chosenBrand?: string;
}
const Catalog: React.FC<ICatalog> = ({ chosenBrand }): React.ReactElement => {
  const [modelsList, setModelsList] = useState<any[]>([]);
  const { subcategory: subcategoryId = '', model: modelId } = useParams();
  const currentCategory = modelId ?? subcategoryId;
  useEffect(() => {
    getModelsList(currentCategory)
      .then((res) => {
        setModelsList(res.content);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const modelsToShow = (chosenBrand !== '') ? modelsList.filter((item) => item.brand === chosenBrand) : modelsList;
  return (
    <>
      {modelsToShow.map((item) => {
        return <ProductCardMedium key={Math.random()} product={item} />;
      })}
    </>
  );
};

export default memo(Catalog);
