const express = require('express');
const router = express.Router();

router.get('/api/v1', (req, res)=>{
   res.status(200).send({
       success: true,
       message: 'Api nodeJs + MySql',
       version: '1.0.0',
   });
});

module.exports = router;