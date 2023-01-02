import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

import CardCategory from "./card/CardCategoryMain";

const PopulatCategory = observer(() => {
  const { categories } = useContext(Context);

  return (
    <section className="popular-category">
      <div className="container">
        <div className="popular-category__wrapper">
          <h2 className="popular-category__title">Популярные категории</h2>

          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            grabCursor={false}
            navigation={true}
            modules={[Navigation]}
            className="popular-category__list">
            {categories.categories.map((category, index) => (
              <SwiperSlide className="popular-category__item" key={index}>
                <CardCategory
                  path_img={"/" + category.imgCategory}
                  title={category.nameCategory}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
});

export default PopulatCategory;
