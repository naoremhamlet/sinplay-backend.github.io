const { conn } = require('../../connection');

async function Delete(req, res, next){
    
    let { table, email } = req.body;
    let sql = `DELETE FROM ${table} WHERE email='${email}'`;
    let deletes = await new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if(err) console.log(err)
            resolve(result);
        })
    })

    res.redirect('/admin');
}


module.exports = Delete