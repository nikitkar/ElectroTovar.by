import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

import CardProduct from "./card/CardProductMain";

const PopulatProducts = observer(() => {
  const { products } = useContext(Context);

  return (
    <section className="hits">
      <div className="container">
        <div className="hits-wrapper">
          <h2 className="hits-title">Хиты продаж</h2>

          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            grabCursor={false}
            navigation={true}
            modules={[Navigation]}
            className="hits-list">
            {products.products.map((product, index) => (
              <SwiperSlide className="hits-item" key={index}>
                <CardProduct
                  path_img={"/" + product.imgProduct}
                  title={product.nameProduct}
                  price={product.priceProduct}
                  id={product.idProduct}
                  discount={product.priceProduct}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
});

export default PopulatProducts;
