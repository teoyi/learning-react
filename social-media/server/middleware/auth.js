import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => { // next is do something then move on to next 
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500; // > 500 is google auth 

        let decodedData; 

        if(token && isCustomAuth){
            decodedData = jwt.verify(token, 'test'); 

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub; 
        }

        next(); 
    } catch (error) {
        console.log(error); 
    }
};

export default auth;