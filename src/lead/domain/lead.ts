import { LeadStatus } from "./leadStatus";

export class Lead {
  private createdAt: Date;

  constructor(private readonly _status: LeadStatus) {
  }

  get status(): LeadStatus {
    return this._status;
  }
}
