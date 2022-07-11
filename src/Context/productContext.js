import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Woman's T-shirt",
      image:
        "https://cdn.shopify.com/s/files/1/2343/4045/products/womens-hollow-out-ruffle-fashion-designer-long-sleeve-tops-womens-fashion-designer-long-sleeve-tops-womens-fashion-designer-plus-size-clothes_e42ff321-8a9c-466e-8ecf-777763e3048b_800x.jpg?v=1649670375",
      description: "Lorem ipsum dolor sit",
    },
    {
      id: 2,
      name: "Beautiful dress",
      image: "https://s1.r29static.com/bin/shop/2d1/x,80/2208356/image.jpg",
      description: "Lorem ipsum dolor sit",
    },
    {
      id: 3,
      name: "Pants of Women",
      image:
        "https://img.guess.com/image/upload/f_auto,q_auto:eco,fl_strip_profile,dpr_1.5,fl_advanced_resize,fl_progressive,w_392,c_scale/v1/NA/Style/ECOMM/W2GA20WDX72-F7IM",
      description: "Lorem ipsum dolor sit",
    },
    {
      id: 4,
      name: "Jewellery",
      image:
        "https://i.pinimg.com/564x/df/93/9a/df939a525b0a841c0baf84abbb754202.jpg",
      description: "Lorem ipsum dolor sit",
    },
    {
      id: 5,
      name: "Sunglasses",
      image:
        "https://img.guess.com/image/upload/b_auto,c_pad,dpr_3.0,f_auto,h_532,q_auto,w_400/c_pad,h_532,w_400/v1/NA/Style/ECOMM/GU6489FW-28F?pgw=1",
      description: "Lorem ipsum dolor sit",
    },
    {
      id: 6,
      name: "Men's shirt",
      image:
        "https://onpointfresh.com/wp-content/uploads/2016/08/tumblr_o9iygiboae1uceufyo1_1280.jpg",
      description: "Lorem ipsum dolor sit",
    },
    {
      id: 7,
      name: "Classic  suit for men",
      image:
        "https://st3.depositphotos.com/2056297/14633/i/600/depositphotos_146331687-stock-photo-handsome-man-wear-black-suit.jpg",
      description: "Lorem ipsum dolor sit",
    },
    {
      id: 8,
      name: "Man's T-shirt",
      image:
        "https://pyxis.nymag.com/v1/imgs/be1/24b/e77e69728fb4293732608f3219c56e34fe-COS--.rsquare.w600.jpg",
      description: "Lorem ipsum dolor sit",
    },
    {
      id: 9,
      name: "Men's pants",
      image:
        "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/100001_300795948016_1.jpg?v=1653881081",
      description: "Lorem ipsum dolor sit",
    },
    {
      id: 10,
      name: "Men's accessories",
      image:
        "https://www.thecoolector.com/wp-content/uploads/2021/02/trend-1024x1024.jpg",
      description: "Lorem ipsum dolor sit",
    },
  ]);
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
