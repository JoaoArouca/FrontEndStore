/* eslint-disable camelcase */
// camelCase disabled because the api returns an object named in underline_case
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // método para pegar o Params no react router v6
import CardDetails from '../componentes/CardDetails';
import { getProductDetails } from '../services/getAPI';

function ProductPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({}); // detalhes de um produto por id
  console.log(details);

  // requisição para detalhes dos produtos
  const getDetails = async (ID) => {
    const detailsJson = await getProductDetails(ID);
    setLoading(false);
    setDetails(detailsJson);
  };

  useEffect(() => {
    setLoading(true);
    getDetails(id);
  }, []);

  return (
    <div>
      {
        loading ? <span>Loading...</span> : null
      }
      {
        details && <CardDetails data={details} />
      }
    </div>
  );
}

export default ProductPage;
