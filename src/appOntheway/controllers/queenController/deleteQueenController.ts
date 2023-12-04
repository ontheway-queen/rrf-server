import { Request, Response, NextFunction } from "express";
import AbstractController from "../../../abstracts/abstractController";
import QueenServices from "../../services/queenServices/queenService";

class DeleteQueenController extends AbstractController {
  private queenServices = new QueenServices();
  constructor() {
    super();
  }
  /**
   * delete queen
   */
  public deleteQueen = this.assyncWrapper.wrap(
    async (req: Request, res: Response): Promise<void> => {
      const data = await this.queenServices.deleteQueen(req);

      if (data.success) {
        res.status(200).json(data);
      } else {
        this.error();
      }
    }
  );
}

export default DeleteQueenController;
