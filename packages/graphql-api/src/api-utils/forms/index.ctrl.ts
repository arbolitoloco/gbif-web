import { Router, Express } from "express";
import { registerHostedPortalApplicationForm } from "./hosted-portal-application";
import { registerBecomeAPublisherForm } from "./become-a-publisher";
import { registerConfirmEndorsment } from "./publisher-endorsment";

export const formRouter = Router();

export default (app: Express) => {
  registerHostedPortalApplicationForm(formRouter);
  registerBecomeAPublisherForm(formRouter);
  registerConfirmEndorsment(formRouter);
  app.use('/forms', formRouter);
}
