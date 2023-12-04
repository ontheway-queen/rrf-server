"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractRouter_1 = __importDefault(require("../../../abstracts/abstractRouter"));
const deleteQueenController_1 = __importDefault(require("../../controllers/queenController/deleteQueenController"));
class DeleteQueenRouter extends abstractRouter_1.default {
    constructor() {
        super();
        this.deleteQueenController = new deleteQueenController_1.default();
        this.callRouters();
    }
    callRouters() {
        /**
         * delete Queen
         */
        this.routers.delete("/queen/:id", this.deleteQueenController.deleteQueen);
    }
}
exports.default = DeleteQueenRouter;
//# sourceMappingURL=deleteQueen.router.js.map