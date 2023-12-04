"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractController_1 = __importDefault(require("../../../abstracts/abstractController"));
const queenService_1 = __importDefault(require("../../services/queenServices/queenService"));
class DeleteQueenController extends abstractController_1.default {
    constructor() {
        super();
        this.queenServices = new queenService_1.default();
        /**
         * delete queen
         */
        this.deleteQueen = this.assyncWrapper.wrap((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.queenServices.deleteQueen(req);
            if (data.success) {
                res.status(200).json(data);
            }
            else {
                this.error();
            }
        }));
    }
}
exports.default = DeleteQueenController;
//# sourceMappingURL=deleteQueenController.js.map