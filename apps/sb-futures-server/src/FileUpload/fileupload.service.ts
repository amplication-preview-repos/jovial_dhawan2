import { Injectable } from "@nestjs/common";

@Injectable()
export class FileUploadService {
  constructor() {}
  async UploadCsv(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
