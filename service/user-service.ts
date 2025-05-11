import usersRepo from "../tickets-repo/users-repo";
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const register = async (user: any) => {

    // Kreiranje hesh passworda
    user.passwordHash = crypto.createHash('md5').update(user.password).digest('hex');
    console.log(user);
    const result = await usersRepo.register(user);
    if (result.affectedRows > 0) {
        // user je kreiran, kreiraj token za njega i posalji ga u odgovor
        const token = jwt.sign({
            fullname: user.fullname,
            isAdmin: false
        }, 'SECRET');
        return { success: true, token };
    } else {
        // nije kreiran
        return { success: false, result }
    }
}


const login = async (user: any) => {
    user.passwordHash = crypto.createHash('md5').update(user.password).digest('hex');
    const result = await usersRepo.login(user);

    if (result && result.length > 0) {
        // ulogovan je
        const token = jwt.sign({
            fullname: user.fullname,
            isAdmin: result[0].is_admin == 1
        }, 'SECRET');
        return { success: true, token }
    } else {
        return { success: false, result }
    }
}

export default { register, login }