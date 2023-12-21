const bcrypt = require('bcrypt');
const db = require('../database/models'); 

const registerController = async (req, res) => {
    try {
       
        const { userName, userPassword, email } = req.body;

        
        const isAdmin = email.includes('@MercadoArte.com');

       
        const hashedPassword = await bcrypt.hash(userPassword, 10);

       
        const newUser = await db.User.create({
            userName: userName,
            userPassword: hashedPassword,
            email: email,
            role: isAdmin ? 'admin' : 'user'
        });

        
        res.redirect('/');
    } catch (error) {
        console.error('Error durante el registro:', error);
        
        res.redirect('/error');
    }
};

module.exports = registerController;
