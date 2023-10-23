import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"/home/diane/Documents/MDT/Portfolio/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
