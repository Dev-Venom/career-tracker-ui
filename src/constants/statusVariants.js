import { APPLICATION_STATUS } from "./applicationStatus";

export const STATUS_VARIANTS = {
  [APPLICATION_STATUS.APPLIED]: "primary",

  [APPLICATION_STATUS.INTERVIEW]: "warning",

  [APPLICATION_STATUS.OFFER]: "success",

  [APPLICATION_STATUS.REJECTED]: "danger",
};