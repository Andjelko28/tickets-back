import dbConnection from "../common/db-connection";

const register = async (user: any) => {
    try {

        const result = await dbConnection.query(`insert into users(fullname, email, password_hash,role_id,department_id) values(?,?,?,?,?)`, [user.fullname, user.email, user.passwordHash, user.role_id, user.department_id]);
        return result;
    } catch
    (e: any) {
        return { success: false, msg: e.message }
    }

}


const login = async (user: any) => {
    try {
        const result = await dbConnection.query(`select * from users where fullname = ? and password.hash = ?`,
            [user.fullname, user.passwordHash])
        return result;
    } catch (e: any) {
        return { succes: false, msg: e.message }
    }
}

export default { register, login }