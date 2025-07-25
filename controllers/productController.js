
const addProduct = async (req, res) =>{

    try {

        const {name, description, price, image, category, subCategory, sizes, bestSell,}  = req.body ; 
        console.log("wirte")
        
    } catch (error) {
        console.log(error.message) ;

        res.json({success:true})
    }

} ;

const listProducts = async (req, res) =>{

    
} ;

const removeProduct = async (req, res) =>{

} ;

const singleProduct = () =>{

} ;


export {addProduct, listProducts, removeProduct, singleProduct} ;  


