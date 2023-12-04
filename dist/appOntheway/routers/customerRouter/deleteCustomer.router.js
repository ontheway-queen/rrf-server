"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractRouter_1 = __importDefault(require("../../../abstracts/abstractRouter"));
const deleteCustomerController_1 = __importDefault(require("../../controllers/customerController/deleteCustomerController"));
class DeleteCustomerRouter extends abstractRouter_1.default {
    constructor() {
        super();
        this.deleteCustomerController = new deleteCustomerController_1.default();
        this.callRouters();
    }
    callRouters() {
        /**
         * delete Customer
         */
        this.routers.delete("/customer/:id", this.deleteCustomerController.deleteCustomer);
    }
}
exports.default = DeleteCustomerRouter;
//# sourceMappingURL=deleteCustomer.router.js.map