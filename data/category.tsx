interface cat {
  children:string[]
  status:string
  _id:string
  parent:string
  type:string
  icon:string 
  __v:0
 
}






export const categoryArr:cat[] = [
  {
    children: [
      "Fish",
      "Meat"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa9587",
    parent: "Fish & Meat",
    type: "Grocery",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643898146/aolu4dryjfofkmvxhtac.png",
    __v: 0
  },
  {
    children: [
      "Dry Fruits",
      "Fresh Fruits",
      "Fresh Vegetable"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa9586",
    parent: "Fruits & Vegetable",
    type: "Grocery",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643898282/fq1hjkheem3e0xrgpwjs.png",
    __v: 0
  },
  {
    children: [
      "Fresh Seafood"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa9585",
    parent: "Fresh Seafood",
    type: "Grocery",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643898921/fbbtcof0be7eygids9z5.png",
    __v: 0
  },
  {
    children: [
      "Oil",
      "Rice",
      "Flour",
      "Dry Vegetable",
      "Spices & Mixes"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa9584",
    parent: "Cooking Essentials",
    type: "Grocery",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643898463/rdehnuh4ormxuclahm7k.png",
    __v: 0
  },
  {
    children: [
      "Tea",
      "Water",
      "Juice",
      "Coffee",
      "Energy Drinks"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa9582",
    parent: "Drinks",
    type: "Grocery",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643898886/g0x2cwcmy5oyda4snlcd.png",
    __v: 0
  },
  {
    children: [
      "Dairy",
      "Ice Cream",
      "Butter & Ghee"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa9581",
    parent: "Milk & Dairy",
    type: "Grocery",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643898980/xe2za8mpmtgisb1lbdhq.png",
    __v: 0
  },
  {
    children: [
      "Organic Food"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa9580",
    parent: "Organic Food",
    type: "Grocery",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643898293/hzq6zcatoouos47tm2ej.png",
    __v: 0
  },
  {
    children: [
      "Honey"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa957f",
    parent: "Honey",
    type: "Grocery",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643899019/ehnhvzcgugmtt1hy13ge.png",
    __v: 0
  },
  {
    children: [
      "Sauces",
      "Pickles & Condiments"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa957e",
    parent: "Sauces & Pickles",
    type: "Grocery",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643899099/nw2kunc8puqoaxpzu9qa.png",
    __v: 0
  },
  {
    children: [
      "Jam & Jelly"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa957d",
    parent: "Jam & Jelly",
    type: "Grocery",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643899172/av8fh9xt5aq4ne9hedut.png",
    __v: 0
  },
  {
    children: [
      "Chocolate",
      "Chips & Nuts",
      "Canned Food"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa957c",
    parent: "Snacks & Instant",
    type: "Grocery",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643899603/z7jq5afzk5jivyy9ejx2.png",
    __v: 0
  },
  {
    children: [
      "Cakes",
      "Biscuits"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa957b",
    parent: "Biscuits & Cakes",
    type: "Grocery",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643898071/sctbjvub5tunzmo64j9l.png",
    __v: 0
  },
  {
    children: [
      "Cleaner",
      "Laundry",
      "Air Freshener",
      "Water Filter",
      "Pest Control",
      "Cleaning Tools"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa957a",
    parent: "Household Tools",
    type: "Home Accessories",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643899700/mtoxrvix2asxbdtic2pz.png",
    __v: 0
  },
  {
    children: [
      "Baby Food",
      "Baby Accessories"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa9579",
    parent: "Baby Care",
    type: "Health Care",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643899753/xopxbxvjapgpwchptrmb.png",
    __v: 0
  },
  {
    children: [
      "Cat Care",
      "Dog Care",
      "Bird Care"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa9578",
    parent: "Pet Care",
    type: "Grocery",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643899743/qzjzrf8r49upcdsggpda.png",
    __v: 0
  },
  {
    children: [
      "Bath",
      "Cosmetics",
      "Oral Care",
      "Skin Care",
      "Body Care",
      "Shaving Needs"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa9577",
    parent: "Beauty & Health",
    type: "Health Care",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643899846/zbp6thbnznsnp9077yeb.png",
    __v: 0
  },
  {
    children: [
      "Sports",
      "Fitness"
    ],
    status: "Show",
    _id: "61e90dbd8d89ed2b3caa9576",
    parent: "Sports & Fitness",
    type: "Sports & Fitness",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1643899837/hitatjdxe3ldcfhcxpdg.png",
    __v: 0
  }
]

