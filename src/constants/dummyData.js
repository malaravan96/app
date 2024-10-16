const dummyData = [
  {
    id: "1",
    name: "Black Sneakers",
    price: 29.95,
    description:
      "Sunt id et eaque iure quae. Voluptates quia qui sint quia sit ab. Quasi suscipit autem eveniet dicta amet error corrupti sit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["carrot", "blue", "beige", "purple", "black"],
    categories: ["Men"],
    rating: "3",
    image: "https://dl.dropbox.com/s/1mseflylnbx2oim/01.png?dl=0",
    images: [
      {
        id: "1",
        image: "https://dl.dropbox.com/s/1mseflylnbx2oim/01.png?dl=0",
      },
      {
        id: "2",
        image: "https://dl.dropbox.com/s/1mseflylnbx2oim/01.png?dl=0",
      },
      {
        id: "3",
        image: "https://dl.dropbox.com/s/1mseflylnbx2oim/01.png?dl=0",
      },
    ],
    is_bestseller: true,
    is_sale: false,
    featured: false,
    reviews: [
      {
        id: 1,
        name: "Cameron Williamson",
        image: "https://dl.dropbox.com/s/r7bjkzbi27g5sh3/01.png?dl=0",
        comment:
          "Vel provident distinctio consequatur. Totam aut enim ea eligendi maxime. Quia perspiciatis in quia expedita beatae. Cupiditate provident tempore illum sunt sint ea. Enim quisquam in cum quibusdam.",
        rating: 4,
        created_at: "2022-08-20",
      },
      {
        id: 2,
        name: "Theresa Webb",
        image: "https://dl.dropbox.com/s/ohmt9lw6bov5l9o/02.png?dl=0",
        comment:
          "Aliquam laboriosam voluptates et dignissimos veritatis. Ut aut distinctio ipsam ea voluptatem. Sunt omnis id qui laudantium dolor et. Aut temporibus minus consectetur qui dolores architecto dicta.",
        rating: 2,
        created_at: "2022-08-20",
      },
      {
        id: 3,
        name: "Marvin McKinney",
        image: "https://dl.dropbox.com/s/nxlpvlywtjrnsk0/03.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 4,
        name: "Jacob Jones",
        image: "https://dl.dropbox.com/s/1ssp4m6b34t517c/04.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 5,
        name: "Annette Black",
        image: "https://dl.dropbox.com/s/30s8rlhufwmwecj/05.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 6,
        name: "Jenny Wilson",
        image: "https://dl.dropbox.com/s/956bnp6u5v35wkt/06.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 5,
        created_at: "2022-08-20",
      },
    ],
  },
  {
    id: "2",
    name: "Denim Shorts",
    price: 54.96,
    old_price: 76,
    description:
      "Sunt id et eaque iure quae. Voluptates quia qui sint quia sit ab. Quasi suscipit autem eveniet dicta amet error corrupti sit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["carrot", "blue", "beige", "purple", "black"],
    categories: ["Sport"],
    rating: "5",
    image: "https://dl.dropbox.com/s/hk1g6hu1aez9lfe/02.png?dl=0",
    images: [
      {
        id: "1",
        image: "https://dl.dropbox.com/s/hk1g6hu1aez9lfe/02.png?dl=0",
      },
      {
        id: "2",
        image: "https://dl.dropbox.com/s/hk1g6hu1aez9lfe/02.png?dl=0",
      },
      {
        id: "3",
        image: "https://dl.dropbox.com/s/hk1g6hu1aez9lfe/02.png?dl=0",
      },
    ],
    is_bestseller: false,
    is_sale: true,
    featured: true,
    reviews: [
      {
        id: 1,
        name: "Cameron Williamson",
        image: "https://dl.dropbox.com/s/r7bjkzbi27g5sh3/01.png?dl=0",
        comment:
          "Vel provident distinctio consequatur. Totam aut enim ea eligendi maxime. Quia perspiciatis in quia expedita beatae. Cupiditate provident tempore illum sunt sint ea. Enim quisquam in cum quibusdam.",
        rating: 4,
        created_at: "2022-08-20",
      },
      {
        id: 2,
        name: "Theresa Webb",
        image: "https://dl.dropbox.com/s/ohmt9lw6bov5l9o/02.png?dl=0",
        comment:
          "Aliquam laboriosam voluptates et dignissimos veritatis. Ut aut distinctio ipsam ea voluptatem. Sunt omnis id qui laudantium dolor et. Aut temporibus minus consectetur qui dolores architecto dicta.",
        rating: 2,
        created_at: "2022-08-20",
      },
      {
        id: 3,
        name: "Marvin McKinney",
        image: "https://dl.dropbox.com/s/nxlpvlywtjrnsk0/03.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 4,
        name: "Jacob Jones",
        image: "https://dl.dropbox.com/s/1ssp4m6b34t517c/04.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 5,
        name: "Annette Black",
        image: "https://dl.dropbox.com/s/30s8rlhufwmwecj/05.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
    ],
  },
  {
    id: "3",
    name: "Hand Bag",
    price: 24.95,
    old_price: 76,
    description:
      "Sunt id et eaque iure quae. Voluptates quia qui sint quia sit ab. Quasi suscipit autem eveniet dicta amet error corrupti sit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["carrot", "blue", "beige", "purple", "black"],
    categories: ["Sport"],
    rating: "4",
    image: "https://dl.dropbox.com/s/252twzwl5hv96mi/03.png?dl=0",
    images: [
      {
        id: "1",
        image: "https://dl.dropbox.com/s/252twzwl5hv96mi/03.png?dl=0",
      },
      {
        id: "2",
        image: "https://dl.dropbox.com/s/252twzwl5hv96mi/03.png?dl=0",
      },
      {
        id: "3",
        image: "https://dl.dropbox.com/s/252twzwl5hv96mi/03.png?dl=0",
      },
    ],
    is_bestseller: true,
    is_sale: true,
    featured: false,
    reviews: [
      {
        id: 1,
        name: "Cameron Williamson",
        image: "https://dl.dropbox.com/s/r7bjkzbi27g5sh3/01.png?dl=0",
        comment:
          "Vel provident distinctio consequatur. Totam aut enim ea eligendi maxime. Quia perspiciatis in quia expedita beatae. Cupiditate provident tempore illum sunt sint ea. Enim quisquam in cum quibusdam.",
        rating: 4,
        created_at: "2022-08-20",
      },
      {
        id: 2,
        name: "Theresa Webb",
        image: "https://dl.dropbox.com/s/ohmt9lw6bov5l9o/02.png?dl=0",
        comment:
          "Aliquam laboriosam voluptates et dignissimos veritatis. Ut aut distinctio ipsam ea voluptatem. Sunt omnis id qui laudantium dolor et. Aut temporibus minus consectetur qui dolores architecto dicta.",
        rating: 2,
        created_at: "2022-08-20",
      },
      {
        id: 3,
        name: "Marvin McKinney",
        image: "https://dl.dropbox.com/s/nxlpvlywtjrnsk0/03.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 4,
        name: "Jacob Jones",
        image: "https://dl.dropbox.com/s/1ssp4m6b34t517c/04.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 5,
        name: "Annette Black",
        image: "https://dl.dropbox.com/s/30s8rlhufwmwecj/05.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 6,
        name: "Jenny Wilson",
        image: "https://dl.dropbox.com/s/956bnp6u5v35wkt/06.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 5,
        created_at: "2022-08-20",
      },
      {
        id: 7,
        name: "Cameron Williamson",
        image: "https://dl.dropbox.com/s/r7bjkzbi27g5sh3/01.png?dl=0",
        comment:
          "Vel provident distinctio consequatur. Totam aut enim ea eligendi maxime. Quia perspiciatis in quia expedita beatae. Cupiditate provident tempore illum sunt sint ea. Enim quisquam in cum quibusdam.",
        rating: 4,
        created_at: "2022-08-20",
      },
    ],
  },
  {
    id: "4",
    name: "Purple Sneakers",
    price: 22.87,
    description:
      "Sunt id et eaque iure quae. Voluptates quia qui sint quia sit ab. Quasi suscipit autem eveniet dicta amet error corrupti sit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["carrot", "blue", "beige", "purple", "black"],
    categories: ["Sport"],
    rating: "3",
    image: "https://dl.dropbox.com/s/1jv4suu79ax10bs/04.png?dl=0",
    images: [
      {
        id: "1",
        image: "https://dl.dropbox.com/s/1jv4suu79ax10bs/04.png?dl=0",
      },
      {
        id: "2",
        image: "https://dl.dropbox.com/s/1jv4suu79ax10bs/04.png?dl=0",
      },
      {
        id: "3",
        image: "https://dl.dropbox.com/s/1jv4suu79ax10bs/04.png?dl=0",
      },
    ],
    is_bestseller: false,
    is_sale: false,
    featured: true,
    reviews: [
      {
        id: 1,
        name: "Cameron Williamson",
        image: "https://dl.dropbox.com/s/r7bjkzbi27g5sh3/01.png?dl=0",
        comment:
          "Vel provident distinctio consequatur. Totam aut enim ea eligendi maxime. Quia perspiciatis in quia expedita beatae. Cupiditate provident tempore illum sunt sint ea. Enim quisquam in cum quibusdam.",
        rating: 4,
        created_at: "2022-08-20",
      },
      {
        id: 2,
        name: "Theresa Webb",
        image: "https://dl.dropbox.com/s/ohmt9lw6bov5l9o/02.png?dl=0",
        comment:
          "Aliquam laboriosam voluptates et dignissimos veritatis. Ut aut distinctio ipsam ea voluptatem. Sunt omnis id qui laudantium dolor et. Aut temporibus minus consectetur qui dolores architecto dicta.",
        rating: 2,
        created_at: "2022-08-20",
      },
      {
        id: 3,
        name: "Marvin McKinney",
        image: "https://dl.dropbox.com/s/nxlpvlywtjrnsk0/03.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 4,
        name: "Jacob Jones",
        image: "https://dl.dropbox.com/s/1ssp4m6b34t517c/04.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 5,
        name: "Annette Black",
        image: "https://dl.dropbox.com/s/30s8rlhufwmwecj/05.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 6,
        name: "Jenny Wilson",
        image: "https://dl.dropbox.com/s/956bnp6u5v35wkt/06.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 5,
        created_at: "2022-08-20",
      },
      {
        id: 7,
        name: "Cameron Williamson",
        image: "https://dl.dropbox.com/s/r7bjkzbi27g5sh3/01.png?dl=0",
        comment:
          "Vel provident distinctio consequatur. Totam aut enim ea eligendi maxime. Quia perspiciatis in quia expedita beatae. Cupiditate provident tempore illum sunt sint ea. Enim quisquam in cum quibusdam.",
        rating: 4,
        created_at: "2022-08-20",
      },
      {
        id: 8,
        name: "Theresa Webb",
        image: "https://dl.dropbox.com/s/ohmt9lw6bov5l9o/02.png?dl=0",
        comment:
          "Aliquam laboriosam voluptates et dignissimos veritatis. Ut aut distinctio ipsam ea voluptatem. Sunt omnis id qui laudantium dolor et. Aut temporibus minus consectetur qui dolores architecto dicta.",
        rating: 2,
        created_at: "2022-08-20",
      },
    ],
  },
  {
    id: "5",
    name: "Summer Dress",
    price: 44.65,
    old_price: 90,
    description:
      "Sunt id et eaque iure quae. Voluptates quia qui sint quia sit ab. Quasi suscipit autem eveniet dicta amet error corrupti sit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["carrot", "blue", "beige", "purple", "black"],
    categories: ["Sport"],
    rating: "5",
    image: "https://dl.dropbox.com/s/r4lhjbptsgr14jr/05.png?dl=0",
    images: [
      {
        id: "1",
        image: "https://dl.dropbox.com/s/r4lhjbptsgr14jr/05.png?dl=0",
      },
      {
        id: "2",
        image: "https://dl.dropbox.com/s/r4lhjbptsgr14jr/05.png?dl=0",
      },
      {
        id: "3",
        image: "https://dl.dropbox.com/s/r4lhjbptsgr14jr/05.png?dl=0",
      },
    ],
    is_bestseller: true,
    is_sale: true,
    featured: false,
    reviews: [
      {
        id: 1,
        name: "Cameron Williamson",
        image: "https://dl.dropbox.com/s/r7bjkzbi27g5sh3/01.png?dl=0",
        comment:
          "Vel provident distinctio consequatur. Totam aut enim ea eligendi maxime. Quia perspiciatis in quia expedita beatae. Cupiditate provident tempore illum sunt sint ea. Enim quisquam in cum quibusdam.",
        rating: 4,
        created_at: "2022-08-20",
      },
      {
        id: 2,
        name: "Theresa Webb",
        image: "https://dl.dropbox.com/s/ohmt9lw6bov5l9o/02.png?dl=0",
        comment:
          "Aliquam laboriosam voluptates et dignissimos veritatis. Ut aut distinctio ipsam ea voluptatem. Sunt omnis id qui laudantium dolor et. Aut temporibus minus consectetur qui dolores architecto dicta.",
        rating: 2,
        created_at: "2022-08-20",
      },
      {
        id: 3,
        name: "Marvin McKinney",
        image: "https://dl.dropbox.com/s/nxlpvlywtjrnsk0/03.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 4,
        name: "Jacob Jones",
        image: "https://dl.dropbox.com/s/1ssp4m6b34t517c/04.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
    ],
  },
  {
    id: "6",
    name: "Summer Dress",
    price: 42.89,
    description:
      "Sunt id et eaque iure quae. Voluptates quia qui sint quia sit ab. Quasi suscipit autem eveniet dicta amet error corrupti sit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["carrot", "blue", "beige", "purple", "black"],
    categories: ["Sport"],
    rating: "3",
    image: "https://dl.dropbox.com/s/w4p70q0h4780ljl/06.png?dl=0",
    images: [
      {
        id: "1",
        image: "https://dl.dropbox.com/s/w4p70q0h4780ljl/06.png?dl=0",
      },
      {
        id: "2",
        image: "https://dl.dropbox.com/s/w4p70q0h4780ljl/06.png?dl=0",
      },
      {
        id: "3",
        image: "https://dl.dropbox.com/s/w4p70q0h4780ljl/06.png?dl=0",
      },
    ],
    is_bestseller: false,
    is_sale: false,
    featured: true,
    reviews: [
      {
        id: 1,
        name: "Cameron Williamson",
        image: "https://dl.dropbox.com/s/r7bjkzbi27g5sh3/01.png?dl=0",
        comment:
          "Vel provident distinctio consequatur. Totam aut enim ea eligendi maxime. Quia perspiciatis in quia expedita beatae. Cupiditate provident tempore illum sunt sint ea. Enim quisquam in cum quibusdam.",
        rating: 4,
        created_at: "2022-08-20",
      },
      {
        id: 2,
        name: "Theresa Webb",
        image: "https://dl.dropbox.com/s/ohmt9lw6bov5l9o/02.png?dl=0",
        comment:
          "Aliquam laboriosam voluptates et dignissimos veritatis. Ut aut distinctio ipsam ea voluptatem. Sunt omnis id qui laudantium dolor et. Aut temporibus minus consectetur qui dolores architecto dicta.",
        rating: 2,
        created_at: "2022-08-20",
      },
      {
        id: 3,
        name: "Marvin McKinney",
        image: "https://dl.dropbox.com/s/nxlpvlywtjrnsk0/03.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 4,
        name: "Jacob Jones",
        image: "https://dl.dropbox.com/s/1ssp4m6b34t517c/04.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 5,
        name: "Annette Black",
        image: "https://dl.dropbox.com/s/30s8rlhufwmwecj/05.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 6,
        name: "Jenny Wilson",
        image: "https://dl.dropbox.com/s/956bnp6u5v35wkt/06.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 5,
        created_at: "2022-08-20",
      },
    ],
  },
  {
    id: "7",
    name: "T-Shirt",
    price: 12.95,
    description:
      "Sunt id et eaque iure quae. Voluptates quia qui sint quia sit ab. Quasi suscipit autem eveniet dicta amet error corrupti sit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["carrot", "blue", "beige", "purple", "black"],
    categories: ["Sport"],
    rating: "4",
    image: "https://dl.dropbox.com/s/pa7egeq106uku51/07.png?dl=0",
    images: [
      {
        id: "1",
        image: "https://dl.dropbox.com/s/pa7egeq106uku51/07.png?dl=0",
      },
      {
        id: "2",
        image: "https://dl.dropbox.com/s/pa7egeq106uku51/07.png?dl=0",
      },
      {
        id: "3",
        image: "https://dl.dropbox.com/s/pa7egeq106uku51/07.png?dl=0",
      },
    ],
    is_bestseller: true,
    is_sale: false,
    featured: false,
    reviews: [
      {
        id: 1,
        name: "Cameron Williamson",
        image: "https://dl.dropbox.com/s/r7bjkzbi27g5sh3/01.png?dl=0",
        comment:
          "Vel provident distinctio consequatur. Totam aut enim ea eligendi maxime. Quia perspiciatis in quia expedita beatae. Cupiditate provident tempore illum sunt sint ea. Enim quisquam in cum quibusdam.",
        rating: 4,
        created_at: "2022-08-20",
      },
      {
        id: 2,
        name: "Theresa Webb",
        image: "https://dl.dropbox.com/s/ohmt9lw6bov5l9o/02.png?dl=0",
        comment:
          "Aliquam laboriosam voluptates et dignissimos veritatis. Ut aut distinctio ipsam ea voluptatem. Sunt omnis id qui laudantium dolor et. Aut temporibus minus consectetur qui dolores architecto dicta.",
        rating: 2,
        created_at: "2022-08-20",
      },
      {
        id: 3,
        name: "Marvin McKinney",
        image: "https://dl.dropbox.com/s/nxlpvlywtjrnsk0/03.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 4,
        name: "Jacob Jones",
        image: "https://dl.dropbox.com/s/1ssp4m6b34t517c/04.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 5,
        name: "Annette Black",
        image: "https://dl.dropbox.com/s/30s8rlhufwmwecj/05.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
    ],
  },
  {
    id: "8",
    name: "Warm Hat",
    price: 6.93,
    description:
      "Sunt id et eaque iure quae. Voluptates quia qui sint quia sit ab. Quasi suscipit autem eveniet dicta amet error corrupti sit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["carrot", "blue", "beige", "purple", "black"],
    categories: ["Sport"],
    rating: "5",
    image: "https://dl.dropbox.com/s/vvzqi4ufun5ino1/08.png?dl=0",
    images: [
      "https://dl.dropbox.com/s/vvzqi4ufun5ino1/08.png?dl=0",
      "https://dl.dropbox.com/s/vvzqi4ufun5ino1/08.png?dl=0",
      "https://dl.dropbox.com/s/vvzqi4ufun5ino1/08.png?dl=0",
    ],
    is_bestseller: false,
    is_sale: false,
    featured: true,
    reviews: [
      {
        id: 1,
        name: "Cameron Williamson",
        image: "https://dl.dropbox.com/s/r7bjkzbi27g5sh3/01.png?dl=0",
        comment:
          "Vel provident distinctio consequatur. Totam aut enim ea eligendi maxime. Quia perspiciatis in quia expedita beatae. Cupiditate provident tempore illum sunt sint ea. Enim quisquam in cum quibusdam.",
        rating: 4,
        created_at: "2022-08-20",
      },
      {
        id: 2,
        name: "Theresa Webb",
        image: "https://dl.dropbox.com/s/ohmt9lw6bov5l9o/02.png?dl=0",
        comment:
          "Aliquam laboriosam voluptates et dignissimos veritatis. Ut aut distinctio ipsam ea voluptatem. Sunt omnis id qui laudantium dolor et. Aut temporibus minus consectetur qui dolores architecto dicta.",
        rating: 2,
        created_at: "2022-08-20",
      },
      {
        id: 3,
        name: "Marvin McKinney",
        image: "https://dl.dropbox.com/s/nxlpvlywtjrnsk0/03.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
      {
        id: 4,
        name: "Jacob Jones",
        image: "https://dl.dropbox.com/s/1ssp4m6b34t517c/04.png?dl=0",
        comment:
          "Et illum omnis est totam asperiores aliquid et. Ipsum unde labore quibusdam. Nesciunt facilis fugiat aut sapiente expedita perspiciatis. Corrupti ex eum id voluptatem est libero.",
        rating: 3,
        created_at: "2022-08-20",
      },
    ],
  },
];

export { dummyData };
