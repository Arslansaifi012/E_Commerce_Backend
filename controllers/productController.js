
const  addProduct = async (req, res) =>{

    try {

        const {name, description, price,  category, subCategory, sizes,  bestSeller,}  = req.body ; 

        const image1 = req.files.image1 && req.files.image1[0] ;
        const image2 =  req.files.image2 && req.files.image2[0] ;
        const image3 =  req.files.image3 && req.files.image3[0] ;
        const image4 =  req.files.image4 && req.files.image4[0] ;
        

        console.log(name,description,price, category, subCategory, sizes, bestSeller,) ;
        
        console.log(image1, image2, image3, image4) 
        res.json({success:true})
        
        
    } catch (error) {
        console.log(error.message,'add error') ;

        res.json({success:false, msg:error.message })
    }

} ;

const listProducts = async (req, res) =>{

    
} ;

const removeProduct = async (req, res) =>{

} ;

const singleProduct = () =>{

} ;


export {addProduct, listProducts, removeProduct, singleProduct} ;  


