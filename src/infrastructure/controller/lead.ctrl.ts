import { Request, Response } from "express";
import { LeadCreate } from "../../application/lead.create";

class LeadCtrl {
  constructor(private readonly leadCreator: LeadCreate) {}

  public sendCtrl = async ({ body }: Request, res: Response) => {
    console.log("🟡 Entró al controlador de Lead");
    const { message, phone } = body;
    console.log("📥 Datos recibidos:", { message, phone });
    const response = await this.leadCreator.sendMessageAndSave({ message, phone })
    res.send(response);
  };
}

export default LeadCtrl;
