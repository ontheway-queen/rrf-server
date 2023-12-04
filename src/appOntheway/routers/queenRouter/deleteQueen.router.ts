import AbstractRouter from "../../../abstracts/abstractRouter";
import DeleteQueenController from "../../controllers/queenController/deleteQueenController";

class DeleteQueenRouter extends AbstractRouter {
  private deleteQueenController = new DeleteQueenController();

  constructor() {
    super();

    this.callRouters();
  }

  private callRouters() {
    /**
     * delete Queen
     */
    this.routers.delete("/queen/:id", this.deleteQueenController.deleteQueen);
  }
}

export default DeleteQueenRouter;
