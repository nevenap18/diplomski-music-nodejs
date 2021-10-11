import { Controller, Get } from "@nestjs/common";
import { LpService } from "src/services/lp/lp.service";

@Controller('api/lp')
export class LpController {
  constructor(public service: LpService) {}

  @Get()
  async getLp(): Promise<any | null> {
    return await this.service.getLp()
  }
}