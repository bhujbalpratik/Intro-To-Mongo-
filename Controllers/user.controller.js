export const userHome = (req, res) => {
    res.render("userhome");
}

export const userRegister = (req, res) => {


    return res.render("userRegistration");
}

export const register = (req, res) => {

    const { name, password, email } = req.body;


    console.log(`User Name : ${name}`);
    console.log(`User Email : ${email}`);
    console.log(`User Password : ${password}`);
    return res.redirect("/user/login");

}

export const userLogin = (req, res) => {


    return res.render("userlogin");
}

export const PostLogin = (req, res) => {

    const { password, email, date } = req.body;

    console.log(`User Email : ${email}`);
    console.log(`User Password : ${password}`);
    console.log(date);
    return res.redirect("/user");
}