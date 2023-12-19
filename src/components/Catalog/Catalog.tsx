import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getModelsList } from '../../utils/api/catalog+categories.api';
import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';
// import { useLocation } from 'react-router-dom';

const Catalog: React.FC = (): React.ReactElement => {
  // const location = useLocation().pathname;
  const [modelsList, setModelsList] = useState([]);
  const { model: modelId = '' } = useParams();
  useEffect(() => {
    getModelsList(modelId)
      .then((res) => {
        setModelsList(res.content);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      {modelsList.map((item) => {
        return (
          <ProductCardMedium key={Math.random()} product={item}/>
        );
      })}
    </>
  );
};

export default memo(Catalog);
