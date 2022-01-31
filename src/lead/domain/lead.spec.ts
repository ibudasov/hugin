import { Lead } from "./lead";
import { LeadStatus } from "./leadStatus";

describe("Lead", () => {
  let lead: Lead;

  beforeEach(async () => {
    lead = new Lead(LeadStatus.New);
  });

  it("should be created with LeadStatus.New", () => {
    expect(lead).toBeDefined();
    expect(lead.status).toBe(LeadStatus.New);
  });
});
