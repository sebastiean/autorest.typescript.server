/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "./models";

const packageName = "";
const packageVersion = "";

export class AutoRestRequiredOptionalTestServiceContext extends coreHttp.ServiceClient {
  requiredGlobalPath: string;
  requiredGlobalQuery: string;
  optionalGlobalQuery?: number;

  /**
   * Initializes a new instance of the AutoRestRequiredOptionalTestServiceContext class.
   * @param requiredGlobalPath number of items to skip
   * @param requiredGlobalQuery number of items to skip
   * @param [options] The parameter options
   */
  constructor(requiredGlobalPath: string, requiredGlobalQuery: string, options?: Models.AutoRestRequiredOptionalTestServiceOptions) {
    if (requiredGlobalPath == undefined) {
      throw new Error("'requiredGlobalPath' cannot be null.");
    }
    if (requiredGlobalQuery == undefined) {
      throw new Error("'requiredGlobalQuery' cannot be null.");
    }

    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.baseUri = options.baseUri || this.baseUri || "http://localhost:3000";
    this.requestContentType = "application/json; charset=utf-8";
    this.requiredGlobalPath = requiredGlobalPath;
    this.requiredGlobalQuery = requiredGlobalQuery;
    if (options.optionalGlobalQuery !== null && options.optionalGlobalQuery !== undefined) {
      this.optionalGlobalQuery = options.optionalGlobalQuery;
    }
  }
}
