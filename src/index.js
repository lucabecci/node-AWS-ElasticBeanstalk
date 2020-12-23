const express = require('express')

const application = express()
const port = process.env.PORT || 4000

function main() {
    application.get('/', (_req, res) => {
        res.status(200).json({
            ok: true,
            msg: "Hello World AWS Elastic Beanstalk"
        })
    })
    
    application.listen(port, (error) => {
        error ? console.log('Internal server error') : null;

        console.log(`Server on port: ${port}`)
    })
}

main()

