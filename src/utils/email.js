export const matchEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.exec(email)) {
        return false;
    } else {
        return true;
    }
  }