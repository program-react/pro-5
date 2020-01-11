const jwt = require('jsonwebtoken');
// 创建一个 四要   sceret;
const sceret = 'qwewq;sakdlcvsf;bkmdils';
module.exports = {
    // 创建token的方法;
    createToken(data){
        // data 可传可不传;
        var data = data || {};
        let token = jwt.sign(data,sceret);
        return token;
    },
     // 验证token对不对; 对则返回数据;
    verifyToken(token){
        let result = null;
        try {
            result = jwt.verify(token,sceret)
        } catch (error) {
            
        }
        console.log(result);
        return result;
    }
}