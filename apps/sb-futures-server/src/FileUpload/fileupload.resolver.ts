import * as graphql from "@nestjs/graphql";
import { FileUploadService } from "./fileupload.service";

export class FileUploadResolver {
  constructor(protected readonly service: FileUploadService) {}

  @graphql.Mutation(() => String)
  async UploadCsv(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadCsv(args);
  }
}
