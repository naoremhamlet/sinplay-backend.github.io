const sendmail = require('./NodeMailer')

async function Customer(req, res, next, conn){
    let { data } = req.body;
    let sql = `SELECT email FROM customer WHERE email='${data.email}'`;
    let results = await new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if(err) console.log(err)
            resolve(result)
        })
    })

    if(results.length>0){
        res.send({ success: false })
        return;
    }else{
        let values = `('${data.email}', '${data.company}', '${data.phone}', '${data.name}', '${data.about}')`;
        
        sql = `INSERT INTO customer (email, company, phone, name, about) VALUES ${values}`;
        let pushdatas = await new Promise((resolve, reject) => {
            conn.query(sql, (err, result) => {
                if(err) console.log(err)
                resolve(result)
            })
        })

        sendmail(data.email, '\tThank You for reaching us.\nWe will get back to you at the earliest.\nHR \nSinplay')
        res.send({ success: true })
        return;
    }
}

module.exports = Customer;