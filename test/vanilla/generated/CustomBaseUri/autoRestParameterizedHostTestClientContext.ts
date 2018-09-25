/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";

const packageName = "";
const packageVersion = "";

export class AutoRestParameterizedHostTestClientContext extends msRest.ServiceClient {
  host?: string;

  /**
   * Initializes a new instance of the AutoRestParameterizedHostTestClientContext class.
   *
   * @param {object} [options] The parameter options
   */
  constructor(options?: Models.AutoRestParameterizedHostTestClientOptions) {

    if (!options) {
      options = {};
    }

    super(undefined, options);

    this.host = 'host';
    this.baseUri = "http://{accountName}{host}";
    this.requestContentType = "application/json; charset=utf-8";

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.host !== null && options.host !== undefined) {
      this.host = options.host;
    }
  }
}
