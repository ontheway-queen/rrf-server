import { Request, Response, NextFunction } from "express";
import AbstractController from "../../../abstracts/abstractController";
import CustomerServices from "../../services/customerServices/customerServices";

class DeleteCustomerController extends AbstractController {
  private customerServices = new CustomerServices();
  constructor() {
    super();
  }
  /**
   * delete Customer
   */
  public deleteCustomer = this.assyncWrapper.wrap(
    async (req: Request, res: Response): Promise<void> => {
      const data = await this.customerServices.deleteCustomer(req);

      if (data.success) {
        res.status(200).json(data);
      } else {
        this.error();
      }
    }
  );
}

export default DeleteCustomerController;
