const { conn } = require('../../connection');

async function Dashboard(req, res, next){
    let { customers, meetings } = await getDetails(conn);

    res.render('admin', {customers, meetings});
}


async function getDetails(conn){
    let sql = `SELECT * FROM customer`;
    let customers = await new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if(err) console.log(err)
            resolve(result);
        })
    })

    sql = `SELECT * FROM meeting`;
    let meetings = await new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if(err) console.log(err);
            resolve(result);
        })
    })

    return { customers, meetings };
}

module.exports = Dashboard;