import dbConnection from "../common/db-connection";

const register = async (user: any) => {
    try {

        const result = await dbConnection.query(`insert into users(fullname, email, password_hash,role_id,department_id) values(?,?,?,?,?,0)`, [user.fullname, user.email, user.password_hash, user.role_id, user.department_id]);
        return result;
    } catch
    (e: any) {
        return { success: false, msg: e.message }
    }

}