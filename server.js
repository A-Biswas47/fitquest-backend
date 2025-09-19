// near top of server.js
const cors = require('cors');
const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').filter(Boolean);
const corsOptions = { origin: allowed.length ? allowed : true, credentials: true };
app.use(cors(corsOptions));
