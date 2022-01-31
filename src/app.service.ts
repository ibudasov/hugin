import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hugin and Munin fly each day\n" +
      "over the spacious earth.\n" +
      "I fear for Hugin, that he come not back,\n" +
      "yet more anxious am I for Munin.";
  }
}
