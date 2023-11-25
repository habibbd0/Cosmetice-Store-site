

const loadBrands = async() => {
	const res = await fetch('https://cosmetics-backend-server.vercel.app/brands');
	const data = await res.json();
	showBrandsData(data);
	// console.log(data);
}
loadBrands();

const showBrandsData = (brandData) => {
// console.log(brandData);

const brandContainer = document.getElementById('brands')
  for(let brand of brandData) {
//    console.log(brand);
   const brandItem = document.createElement('div');
   brandItem.innerHTML = `
   <div class="card bg-base-100 shadow-xl border">
  <figure class= "h-72 border overflow-hidden">
  <img class = "w-full h-full hover:scale-110 transition-all duration-700 ease-in-out" src=${brand.brand_logo} alt="Shoes" />
  </figure>
  <div class="card-body">
    <p>${brand.brand_name}</p>
  </div>
</div>
   `;

   brandContainer.appendChild(brandItem);
}
}

// products image 

const loadProducts = async(isShowMore) => {
 const res = await fetch('https://cosmetics-backend-server.vercel.app/product');
 const data = await res.json()
 loadProductsImage(data,isShowMore);
//  console.log(isShowMore);
//  console.log(data);
}
loadProducts();

const loadProductsImage = (products,isShowMore) => {
	const  loadProductsContainer = document.getElementById('productsImages');
	const  showMoreID = document.getElementById('showAllId');
   if(!isShowMore) {
    products = products.slice(0,5);
    showMoreID.classList.remove('hidden');
  } else {
    showMoreID.classList.add('hidden');
  }

    for (let product of products) {
		let div = document.createElement('div');
		div.innerHTML =`
		<div class="card card-compact bg-base-100 shadow-xl">
  <figure class="h-44 shadow-md border">
  <img class="h-full w-full hover:scale-110 transition-all duration-700 ease-in-out text-center mx-auto" src="${product.photo}" alt="Shoes"/>
  </figure>
  <div class="card-body">
  <div class="w-full h-full flex text-center justify-between items-center">
  <h2 class=" text-md font-semibold">Price:${product.price}</h2>
  <p class="w-full h-auto text-md font-semibold">Reting :${product.rating}</p>
  </div>
  <div class="card-actions justify-end mt-5">
  <button class="btn btn-primary">Buy Now</button>
  </div>
</div>
</div>
		`;
		loadProductsContainer.appendChild(div);
	}

	}

  // add to cart design
  const addLoad = async(showCart) => {
    const res = await fetch ('https://cosmetics-backend-server.vercel.app/cart');
    const data =await res.json();
    loadAddImage(data,showCart);
    // console.log(showCart);
  }
  addLoad();
  const loadAddImage = (addCart,showCart) => {
    const addToCart = document.getElementById('addtocart');
    const addcart = document.getElementById('addCart')
    console.log(showCart);
    if(!showCart) {
      addCart = addCart.slice(0,2); 
      addcart.classList.remove('hidden')
    } else {
      addcart.classList.add('hidden')
    }
    for(let cartadd of addCart){
      let div = document.createElement('div');
      div.innerHTML=`
      <div class="card card-side bg-base-100 drop-shadow-2xl">
  <figure class="h-72 w-80"><img class="hover:scale-105 transition-all duration-700 " src="${cartadd.photo}" alt="Movie"/></figure>
  <div class="card-body">
    <h1 class=" text-xl font-semibold mt-10 font-serif cursor-pointer">Brand : ${cartadd.brand}</h1>
    <h2 class=" cursor-pointer card-title text-3xl font-serif text-center mx-auto mt-4 ml-80">Brand Products</h2>
    <p class="text-xl text-center mx-auto ml-56 font-serif">A good toner tightens pores over regular use</br/> .brans items products in the 100% natural</p>
    <h3 class="text-xl font-semibold font-serif cursor-pointer">Price : ${cartadd.price}</h3>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      `;
      addToCart.appendChild(div);
    }
  }
  
  //  all products show 

  const showAllProduct = () => {
    loadProducts(true);
  } 
// add to caart 
const addShow = () => {
  addLoad(true);
}
