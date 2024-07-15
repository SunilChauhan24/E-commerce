export const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://images.pexels.com/photos/5848886/pexels-photo-5848886.jpeg?auto=compress&cs=tinysrgb&w=600",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/",
          imageSrc:
            "https://images.pexels.com/photos/8764562/pexels-photo-8764562.jpeg?auto=compress&cs=tinysrgb&w=600",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", id: "top", href: `{women/clothing/tops}` },
            { name: "Dresses", id: "women_dress", href: "#" },
            { name: "Women Jeans", id: "women_jeans" },
            { name: "Lengha Choli", id: "lengha_choli" },
            { name: "Sweaters", id: "sweater" },
            { name: "T-Shirts", id: "t-shirt" },
            { name: "Jackets", id: "jacket" },
            { name: "Gouns", id: "gouns" },
            { name: "Sarees", id: "saree" },
            { name: "Kurtas", id: "kurtas" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "watch" },
            { name: "Wallets", id: "wallet" },
            { name: "Bags", id: "bag" },
            { name: "Sunglasses", id: "sunglasse" },
            { name: "Hats", id: "hat" },
            { name: "Belts", id: "belt" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", id: "#" },
            { name: "My Way", id: "#" },
            { name: "Re-Arranged", id: "#" },
            { name: "Counterfeit", id: "#" },
            { name: "Significant Other", id: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          id: "#",
          imageSrc:
            "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          id: "#",
          imageSrc:
            "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Mens Kurtas", id: "mens_kurta" },
            { name: "Shirt", id: "shirt" },
            { name: "Men Jeans", id: "men_jeans" },
            { name: "Sweaters", id: "#" },
            { name: "T-Shirts", id: "t-shirt" },
            { name: "Jackets", id: "#" },
            { name: "Activewear", id: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "#" },
            { name: "Wallets", id: "#" },
            { name: "Bags", id: "#" },
            { name: "Sunglasses", id: "#" },
            { name: "Hats", id: "#" },
            { name: "Belts", id: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", id: "#" },
            { name: "Counterfeit", id: "#" },
            { name: "Full Nelson", id: "#" },
            { name: "My Way", id: "#" },
          ],
        },
      ],
    },
    {
      id: "Kids",
      name: "Kids",
      featured: [
        {
          // name: "New Arrivals",
          id: "#",
          imageSrc:
            "https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=600",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          // name: "Artwork Tees",
          id: "#",
          imageSrc:
            "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=600",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Boys",
          items: [
            {
              name: "T-shirts",
              id: "T-shirts",
              href: `{Kids/clothing/T-shirts}`,
            },
            { name: "Shirt", id: "shirt" },
            { name: "Shorts", id: "men_jeans" },
            { name: "Denims & Trousers", id: "#" },
            { name: "InnerWear", id: "t-shirt" },
            { name: "Outerwear", id: "#" },
            { name: "Joggers & Track Pants", id: "#" },
          ],
        },
        {
          id: "accessories",
          name: "TOYS",
          items: [
            { name: "Remote Control Toys", id: "#" },
            { name: "Creative & Educational Toys", id: "#" },
            { name: "Dolls & Doll Houses", id: "#" },
            { name: "Soft Toys", id: "#" },
            { name: "Helicopter & Drones", id: "#" },
            { name: "Musical Toys", id: "#" },
          ],
        },
        {
          id: "brands",
          name: "Girls",
          items: [
            { name: "Dresses & Frocks", id: "#" },
            { name: "Jeans & Jeggings", id: "#" },
            { name: "Leggings", id: "#" },
            { name: "Skirts & Shorts", id: "#" },
            { name: "Tops & T-Shirts", id: "#" },
          ],
        },
        // {
        //   id: "INNERWEAR",
        //   name: "INNERWEAR & SLEEPWEAR",
        //   items: [
        //     // { name: "Sneakers For Boys", id: "#" },
        //     // { name: "Action Figures", id: "#" },
        //     // { name: "Dolls", id: "#" },
        //     // { name: "Cars", id: "#" },
        //   ],
        // },
      ],
    },
    {
      id: "Makup",
      name: "Makup",
      featured: [
        {
          name: "New Arrivals",
          id: "#",
          imageSrc:
            "https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          id: "#",
          imageSrc:
            "https://images.pexels.com/photos/3912572/pexels-photo-3912572.jpeg?auto=compress&cs=tinysrgb&w=600",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "MAKEUP",
          name: "MAKEUP",
          items: [
            {
              name: "LipstickLip",
              id: "LipstickLip",
              href: `{Makup/MAKEUP/LipstickLip}`,
            },
            { name: "GlossLip", id: "shirt" },
            { name: "LinerLip", id: "men_jeans" },
            { name: "BalmNail", id: "#" },
            { name: "Kajals", id: "t-shirt" },
            { name: "Foundation", id: "#" },
            { name: "Concealer", id: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "#" },
            { name: "Wallets", id: "#" },
            { name: "Bags", id: "#" },
            { name: "Sunglasses", id: "#" },
            { name: "Hats", id: "#" },
            { name: "Belts", id: "#" },
          ],
        },
        {
          id: "HAIR CARE",
          name: "HAIR CARE",
          items: [
            { name: "Shampoo", id: "#" },
            { name: "Conditioner", id: "#" },
            { name: "ColorHair", id: "#" },
            { name: "Hair Oil", id: "#" },
          ],
        },
      ],
    },
    

  ],
  // pages: [
  //   { name: "Contect us", id: "/" },
  //   { name: "Stores", id: "/" },
  // ],
};