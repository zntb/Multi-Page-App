import { useParams, Link } from 'react-router-dom';

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <div>Product Details</div>
      {params.productId}
      <p>
        {/* Back to previous Page to='.. */}
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
export default ProductDetailPage;
