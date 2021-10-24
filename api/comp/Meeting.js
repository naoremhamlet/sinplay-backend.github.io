const sendmail = require('./NodeMailer')

async function Meeting(req, res, next, conn){
    let { data } = req.body;
    let values = `('${data.date}', '${data.name}', '${data.email}', '${data.about}', '${data.guest_email}')`;
    
    let sql = `INSERT INTO meeting (date, name, email, about, guest_email) VALUES ${values}`;
    let pushdatas = await new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if(err) console.log(err)
            resolve(result)
        })
    })

    sendmail(data.email, `Your message is schedule on ${new Date(data.date).toLocaleString('en-IN')}. \nPlease be prepared and will get to you soon`)
    res.send({ success: true })
}

module.exports = Meeting;