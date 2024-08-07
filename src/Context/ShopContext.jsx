// import React, { createContext, useEffect, useState } from 'react';

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//     let cart = {};
//     for (let index = 0; index < 300 + 1; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// };

// const ShopContextProvider = (props) => {
//     const [all_product, setAll_Product] = useState([]);
//     const [cartItems, setCartItems] = useState(getDefaultCart());
//     const [wishlistItems, setWishlistItems] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:4000/allproducts')
//             .then((response) => response.json())
//             .then((data) => setAll_Product(data));

//         const token = localStorage.getItem('auth-token');
//         if (token) {
//             fetch('http://localhost:4000/getcart', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'auth-token': token,
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({}),
//             }).then((response) => response.json())
//                 .then((data) => setCartItems(data));

//             fetch('http://localhost:4000/getwishlist', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'auth-token': token,
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({}),
//             }).then((response) => response.json())
//                 .then((data) => setWishlistItems(data));
//         }
//     }, []);

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//         if (localStorage.getItem('auth-token')) {
//             fetch('http://localhost:4000/addtocart', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ itemId }),
//             });
//         }
//     };

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//         if (localStorage.getItem('auth-token')) {
//             fetch('http://localhost:4000/removefromcart', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ itemId }),
//             });
//         }
//     };

//     const getTotalCartAmount = () => {
//         let total = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = all_product.find((product) => product.id === Number(item));
//                 if (itemInfo && itemInfo.new_price) {
//                     total += itemInfo.new_price * cartItems[item];
//                 }
//             }
//         }
//         return total;
//     };

//     const getTotalCartItems = () => {
//         let total = 0;
//         for (const item in cartItems) {
//             total += cartItems[item];
//         }
//         return total;
//     };

//     const contextValue = {
//         getTotalCartItems,
//         all_product,
//         cartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         wishlistItems,
//     };

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;




import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const getDefaultWishlist = () => {
    let wishlist = [];
    return wishlist;
};

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist());

    useEffect(() => {
        fetch('https://shopping-backend-ch7k.onrender.com/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_Product(data));

        if (localStorage.getItem('auth-token')) {
            fetch('https://shopping-backend-ch7k.onrender.com/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: "",
            }).then((response) => response.json())
                .then((data) => setCartItems(data));

            fetch('https://shopping-backend-ch7k.onrender.com/getwishlist', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: "",
            }).then((response) => response.json())
                .then((data) => setWishlistItems(data));
        }
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch('https://shopping-backend-ch7k.onrender.com/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch('https://shopping-backend-ch7k.onrender.com/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    };

    const addToWishlist = (itemId) => {
        setWishlistItems((prev) => [...prev, itemId]);
        if (localStorage.getItem('auth-token')) {
            fetch('https://shopping-backend-ch7k.onrender.com/addtowishlist', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    };

    const removeFromWishlist = (itemId) => {
        setWishlistItems((prev) => prev.filter((id) => id !== itemId));
        if (localStorage.getItem('auth-token')) {
            fetch('https://shopping-backend-ch7k.onrender.com/removefromwishlist', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    };

    const getTotalcartamount = () => {
        let totamt = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totamt += itemInfo.new_price * cartItems[item];
            }
        }
        return totamt;
    };

    const gettotalcartitems = () => {
        let totit = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totit += cartItems[item];
            }
        }
        return totit;
    };

    const contextValue = {
        gettotalcartitems,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalcartamount,
        wishlistItems,
        addToWishlist,
        removeFromWishlist
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;


// import React ,{createContext, useEffect, useState}from "react";
// // import all_product from '../Components/Assets/Frontend_Assets/all_product'



// export const ShopContext = createContext(null);
// const getDefaultCart =()=>{
//     let cart={};
//     for (let index = 0; index < 300+1; index++) {
//         cart[index] = 0;
        
//     }
//     return cart;
// }
// const ShopContextProvider=(props)=>{
//     const[all_product,setAll_Product]=useState([]);
//     const [cartItems,setCartItems]=useState(getDefaultCart());

//     useEffect(()=>{
//         fetch('http://localhost:4000/allproducts')
//         .then((response)=>response.json())
//         .then((data)=>setAll_Product(data))

//         if(localStorage.getItem('auth-token')){
//             fetch('http://localhost:4000/getcart',{
//                 method:'POST',
//                 headers:{
//                     Accept:'application/form-data',
//                     'auth-token':`${localStorage.getItem('auth-token')}`,
//                     'Content-Type':'application/json',
//                 },
//                 body:"",
//             }).then((response)=>response.json())
//             .then((data)=>setCartItems(data))
//         }
//     },[])
    
//     const addToCart=(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         if (localStorage.getItem('auth-token')){
//             fetch('http://localhost:4000/addtocart',{
//                 method:'POST',
//                 headers:{
//                     Accept:'application/form-data',
//                     'auth-token':`${localStorage.getItem('auth-token')}`,
//                     'Content-Type':'application/json',
//                 },
//                 body:JSON.stringify({"itemId":itemId}),
//             })
//             .then((response)=>response.json())
//             .then((data)=>console.log(data));
//         }
//     }
//     const removefromCart=(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
//         if(localStorage.getItem('auth-token')){
//             fetch('http://localhost:4000/removefromcart',{
//                 method:'POST',
//                 headers:{
//                     Accept:'application/form-data',
//                     'auth-token':`${localStorage.getItem('auth-token')}`,
//                     'Content-Type':'application/json',
//                 },
//                 body:JSON.stringify({"itemId":itemId}),
//             })
//             .then((response)=>response.json())
//             .then((data)=>console.log(data));
//         }
//     }
//     const getTotalcartamount=()=>{
//         let totamt=0;
//         for(const item in cartItems)
//         {
//             if(cartItems[item]>0)
//             {
//                 let itemInfo=all_product.find((product)=>product.id===Number(item))
//                 totamt+=itemInfo.new_price * cartItems[item];
//             }
            
//         }
//         return totamt
//     }
//     const gettotalcartitems=()=>{
//         let totit=0;
//         for(const item in cartItems)
//         {
//             if (cartItems[item]>0)
//             {
//                 totit+=cartItems[item];
//             }
//         }
//         return totit;
//     }
//     const contextValue={gettotalcartitems,all_product,cartItems,addToCart,removefromCart,getTotalcartamount};
//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }
// export default ShopContextProvider;
