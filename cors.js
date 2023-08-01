function cors(allowedOrigin) {
  console.info(`CORS enabled for '${allowedOrigin}'`)
  
  return (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Headers', 'content-type, Authorization, x-version');
    res.setHeader('Access-Control-Expose-Headers', 'x-version');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
		if (req.method.toUpperCase() === 'OPTIONS'){
      res.status(200).send("PREFLIGHT OK");
    } else {
      next();
    }
  };
}

module.exports = { cors };