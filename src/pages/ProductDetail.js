import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <div>Product Details</div>
      {params.productId}
    </>
  );
}
export default ProductDetailPage;
