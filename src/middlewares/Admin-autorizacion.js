// Middleware de autorización
const isAdmin = async (req, res, next) => {
    try {
        
        if (req.isAuthenticated()) {
            const user = req.user;

            
            if (user.role === 'admin') {
                return next(); 
            } else {
                res.redirect('/access-denied'); 
            }
        } else {
            res.redirect('/login'); 
        }
    } catch (error) {
        console.error('Error en el middleware de autorización:', error);
        res.redirect('/error'); 
    }
};

module.exports = isAdmin;





app.use((req, res, next) => {
    if (req.isAuthenticated() && req.user) {
      console.log('Roles del usuario:', req.user.roles);
    }
    next();
  });