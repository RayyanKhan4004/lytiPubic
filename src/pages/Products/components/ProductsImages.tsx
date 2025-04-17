import ProductImage1 from "./assets/icons/ProductsImage1.svg";
import ProductImage2 from "./assets/icons/ProductsImage2.svg";
import ProductImage3 from "./assets/icons/ProductsImage3.svg";
import ProductImage4 from "./assets/icons/ProductsImage4.svg";
import ProductImage5 from "./assets/icons/ProductsImage5.svg";
import ProductImage6 from "./assets/icons/ProductsImage6.svg";
function ProductsImages() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 pl-15 pr-15">
        
        <img src={ProductImage1} alt="" className="w-fit "/>
        <img src={ProductImage2} alt="" className="w-fit"/>
        <img src={ProductImage3} alt="" className="w-fit"/>
        <img src={ProductImage4} alt="" className="w-fit"/>
        <img src={ProductImage5} alt="" className="w-fit"/>
        <img src={ProductImage6} alt="" className="w-fit"/>
        
      </div>
    </div>
  );
}

export default ProductsImages;
