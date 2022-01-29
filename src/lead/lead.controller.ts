import { Controller, Get } from "@nestjs/common";

@Controller("lead")
export class LeadController {

  @Get()
  getLead(): string {
    return "lead";
  }

}
