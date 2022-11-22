import { Controller, Get, Request } from "@nestjs/common";
import { LpService } from "src/services/lp/lp.service";

@Controller('api/lp')
export class LpController {
  constructor(public service: LpService) {}

  @Get()
  getLp(@Request() req): Promise<any | null> {
    return this.service.getLp(req.user.userId)
  }
}