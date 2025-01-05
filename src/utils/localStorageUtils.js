export const saveUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const deleteUserFromLocalStorage = () => {
      localStorage.removeItem('user');
  };

  export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };

  export const doesUserExistInLocalStorage = () => {
    return !!localStorage.getItem('user');
  };
  
  export const updateUserInLocalStorage = (updatedUser) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const newUser = { ...user, ...updatedUser }; // Merge old data with updates
      localStorage.setItem('user', JSON.stringify(newUser));
    }
  };  