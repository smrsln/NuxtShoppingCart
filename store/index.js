import Vuex from "vuex"

const createStore = () => {
return new Vuex.Store({
    state: {
        products: [],
        cart: [],
        totalPrice: 0.0
    },
    mutations: {
        setProducts(state,products){
            state.products = products
        },
        setCart(state,cart){
            state.cart = cart
        },
        setTotalPrice(state,totalPrice){
            state.totalPrice = totalPrice
        }
    },
    actions: {
        nuxtServerInit(vuexContext,context){
            return context.$axios.get("/")
            .then(response =>{
                
                vuexContext.commit("setProducts" ,response.data.products)
            })
        },
        addToCart(){vuexContext,product},
        removeProduct(){vuexContext,product},
        changeCount(){vuexContext,product}
    },
    getters: {
        getProducts(state){
           
            return state.products
        },
        getCart(state){
            return state.cart
        },
        getTotalPrice(){
            return state.totalPrice
        }
    },
})
}

export default createStore