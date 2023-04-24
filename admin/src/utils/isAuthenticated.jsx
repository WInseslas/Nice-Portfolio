import jwt_decode from 'jwt-decode';

const isAuthenticated = () => {
  const token = localStorage.getItem('token'); // récupérer le token de localStorage

  if (token) {
    // vérifier si le token est présent
    try {
      const decodedToken = jwt_decode(token); // décoder le token
      const currentTime = Date.now() / 1000; // obtenir le temps actuel en secondes

      if (decodedToken.exp < currentTime) {
        // vérifier si le token a expiré
        localStorage.removeItem('token'); // supprimer le token de localStorage
        return false;
      }

      return true;
    } catch (err) {
      console.log(err);
      localStorage.removeItem('token'); // supprimer le token de localStorage
      return false;
    }
  } else {
    return false;
  }
};

export default isAuthenticated;
