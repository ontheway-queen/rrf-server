"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbCon = void 0;
const config_1 = __importDefault(require("./common/config/config"));
const mysql2_1 = __importDefault(require("mysql2"));
class OtwDb {
    constructor() {
        this.conn = mysql2_1.default.createPool({
            connectionLimit: 100,
            host: config_1.default.DB_HOST,
            user: config_1.default.DB_USER,
            password: config_1.default.DB_PASS,
            database: config_1.default.DB_NAME,
            queueLimit: 100,
        });
    }
    /*  getConnection  */
    getPool() {
        return this.conn;
    }
}
exports.dbCon = new OtwDb();
exports.default = OtwDb;
//# sourceMappingURL=otwDb.js.map