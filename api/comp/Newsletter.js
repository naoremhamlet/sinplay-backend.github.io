const sendmail = require('./NodeMailer')

async function Newsletter(req, res, next, conn) {
    let { data } = req.body;
    let values = `('${data.email}', 'active')`;
    
    let sql = `INSERT INTO newsletter (email, status) VALUES ${values}`;
    let pushdatas = await new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if(err) console.log(err)
            resolve(result)
        })
    })

    sendmail(data.email, `Thank you for subscribing to your newsletter. Stay update for more!!!`)
    res.send({ success: true })
}

module.exports = Newsletter