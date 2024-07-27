declare module "cornerstone-wado-image-loader" {
  import * as cornerstone from "cornerstone-core";
  import dicomParser from "dicom-parser";

  export interface ConfigureOptions {
    beforeSend?: (xhr: XMLHttpRequest) => void;
  }

  export function configure(options: ConfigureOptions): void;

  export function loadImage(
    imageId: string,
    options?: any
  ): cornerstone.ImageLoadObject;

  export const external: {
    cornerstone: typeof cornerstone;
    dicomParser: typeof dicomParser;
  };

  export const webWorkerManager: {
    initialize(config: any): void;
  };

  export const wadouri: {
    loadImage(imageId: string): cornerstone.ImageLoadObject;
  };
}
