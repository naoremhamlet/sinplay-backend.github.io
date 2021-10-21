const sendmail = require('./NodeMailer')

module.exports = async function(app, conn, urlencodedParser){
    app.post('/api/recieve_message', urlencodedParser, pushCustomer)

    async function pushCustomer(req, res, next){
        await push(conn, req, res);
    }
}


async function push(conn, req, res){
    let { data } = req.body;
    // let sql = `SELECT email FROM customer WHERE email='${data.email}'`;
    // let results = await new Promise((resolve, reject) => {
    //     conn.query(sql, (err, result) => {
    //         if(err) console.log(err)
    //         resolve(result)
    //     })
    // })

    // if(results.length>0){
    //     res.send({ success: false })
    //     return;
    // }else{
        let values = `('${data.email}', '${data.company}', '${data.phone}', '${data.name}', '${data.about}')`;
        
        let sql = `INSERT INTO customer (email, company, phone, name, about) VALUES ${values}`;
        let pushdatas = await new Promise((resolve, reject) => {
            conn.query(sql, (err, result) => {
                if(err) console.log(err)
                resolve(result)
            })
        })

        await sendmail(data.email, '\tThank You for reaching us.\nWe will get back to you at the earliest.\nHR \nSinplay')
        res.send({ success: true })
    //}
}