import { NextFunction, Request, Response } from "express";

import { DeleteBookUseCase } from "./DeleteBookUseCase";

class DeleteBookController {

    constructor(private deleteBook: DeleteBookUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {

        const { id } = req.params;

        try {
            await this.deleteBook.execute(id);

            return res.status(204).send();
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { DeleteBookController };