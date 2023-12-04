import AbstractRouter from "../../../abstracts/abstractRouter";
import DeleteCustomerController from "../../controllers/customerController/deleteCustomerController";

class DeleteCustomerRouter extends AbstractRouter {
  private deleteCustomerController = new DeleteCustomerController();

  constructor() {
    super();

    this.callRouters();
  }

  private callRouters() {
    /**
     * delete Customer
     */
    this.routers.delete(
      "/customer/:id",
      this.deleteCustomerController.deleteCustomer
    );
  }
}

export default DeleteCustomerRouter;
