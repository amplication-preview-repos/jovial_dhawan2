import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FileUploadService } from "./fileupload.service";

@swagger.ApiTags("fileUploads")
@common.Controller("fileUploads")
export class FileUploadController {
  constructor(protected readonly service: FileUploadService) {}

  @common.Post("/upload-csv")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadCsv(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UploadCsv(body);
      }
}
