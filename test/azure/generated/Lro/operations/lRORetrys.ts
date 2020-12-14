/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as coreArm from "@azure/core-arm";
import * as Models from "../models";
import * as Mappers from "../models/lRORetrysMappers";
import * as Parameters from "../models/parameters";
import { AutoRestLongRunningOperationTestServiceContext } from "../autoRestLongRunningOperationTestServiceContext";

/** Class representing a LRORetrys. */
export class LRORetrys {
  private readonly client: AutoRestLongRunningOperationTestServiceContext;

  /**
   * Create a LRORetrys.
   * @param {AutoRestLongRunningOperationTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestLongRunningOperationTestServiceContext) {
    this.client = client;
  }

  /**
   * Long running put request, service returns a 500, then a 201 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param [options] The optional parameters
   * @returns Promise<Models.LRORetrysPut201CreatingSucceeded200Response>
   */
  put201CreatingSucceeded200(options?: Models.LRORetrysPut201CreatingSucceeded200OptionalParams): Promise<Models.LRORetrysPut201CreatingSucceeded200Response> {
    return this.beginPut201CreatingSucceeded200(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysPut201CreatingSucceeded200Response>;
  }

  /**
   * Long running put request, service returns a 500, then a 200 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the
   * Azure-AsyncOperation header for operation status
   * @param [options] The optional parameters
   * @returns Promise<Models.LRORetrysPutAsyncRelativeRetrySucceededResponse>
   */
  putAsyncRelativeRetrySucceeded(options?: Models.LRORetrysPutAsyncRelativeRetrySucceededOptionalParams): Promise<Models.LRORetrysPutAsyncRelativeRetrySucceededResponse> {
    return this.beginPutAsyncRelativeRetrySucceeded(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysPutAsyncRelativeRetrySucceededResponse>;
  }

  /**
   * Long running delete request, service returns a 500, then a  202 to the initial request, with an
   * entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param [options] The optional parameters
   * @returns Promise<Models.LRORetrysDeleteProvisioning202Accepted200SucceededResponse>
   */
  deleteProvisioning202Accepted200Succeeded(options?: coreHttp.RequestOptionsBase): Promise<Models.LRORetrysDeleteProvisioning202Accepted200SucceededResponse> {
    return this.beginDeleteProvisioning202Accepted200Succeeded(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysDeleteProvisioning202Accepted200SucceededResponse>;
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Polls
   * return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param [options] The optional parameters
   * @returns Promise<Models.LRORetrysDelete202Retry200Response>
   */
  delete202Retry200(options?: coreHttp.RequestOptionsBase): Promise<Models.LRORetrysDelete202Retry200Response> {
    return this.beginDelete202Retry200(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysDelete202Retry200Response>;
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Poll the
   * endpoint indicated in the Azure-AsyncOperation header for operation status
   * @param [options] The optional parameters
   * @returns Promise<Models.LRORetrysDeleteAsyncRelativeRetrySucceededResponse>
   */
  deleteAsyncRelativeRetrySucceeded(options?: coreHttp.RequestOptionsBase): Promise<Models.LRORetrysDeleteAsyncRelativeRetrySucceededResponse> {
    return this.beginDeleteAsyncRelativeRetrySucceeded(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysDeleteAsyncRelativeRetrySucceededResponse>;
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with
   * 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success
   * @param [options] The optional parameters
   * @returns Promise<Models.LRORetrysPost202Retry200Response>
   */
  post202Retry200(options?: Models.LRORetrysPost202Retry200OptionalParams): Promise<Models.LRORetrysPost202Retry200Response> {
    return this.beginPost202Retry200(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysPost202Retry200Response>;
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the
   * Azure-AsyncOperation header for operation status
   * @param [options] The optional parameters
   * @returns Promise<Models.LRORetrysPostAsyncRelativeRetrySucceededResponse>
   */
  postAsyncRelativeRetrySucceeded(options?: Models.LRORetrysPostAsyncRelativeRetrySucceededOptionalParams): Promise<Models.LRORetrysPostAsyncRelativeRetrySucceededResponse> {
    return this.beginPostAsyncRelativeRetrySucceeded(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysPostAsyncRelativeRetrySucceededResponse>;
  }

  /**
   * Long running put request, service returns a 500, then a 201 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginPut201CreatingSucceeded200(options?: Models.LRORetrysBeginPut201CreatingSucceeded200OptionalParams): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginPut201CreatingSucceeded200OperationSpec,
      options);
  }

  /**
   * Long running put request, service returns a 500, then a 200 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the
   * Azure-AsyncOperation header for operation status
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginPutAsyncRelativeRetrySucceeded(options?: Models.LRORetrysBeginPutAsyncRelativeRetrySucceededOptionalParams): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginPutAsyncRelativeRetrySucceededOperationSpec,
      options);
  }

  /**
   * Long running delete request, service returns a 500, then a  202 to the initial request, with an
   * entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginDeleteProvisioning202Accepted200Succeeded(options?: coreHttp.RequestOptionsBase): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginDeleteProvisioning202Accepted200SucceededOperationSpec,
      options);
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Polls
   * return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginDelete202Retry200(options?: coreHttp.RequestOptionsBase): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginDelete202Retry200OperationSpec,
      options);
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Poll the
   * endpoint indicated in the Azure-AsyncOperation header for operation status
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginDeleteAsyncRelativeRetrySucceeded(options?: coreHttp.RequestOptionsBase): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginDeleteAsyncRelativeRetrySucceededOperationSpec,
      options);
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with
   * 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginPost202Retry200(options?: Models.LRORetrysBeginPost202Retry200OptionalParams): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginPost202Retry200OperationSpec,
      options);
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the
   * Azure-AsyncOperation header for operation status
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginPostAsyncRelativeRetrySucceeded(options?: Models.LRORetrysBeginPostAsyncRelativeRetrySucceededOptionalParams): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginPostAsyncRelativeRetrySucceededOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const beginPut201CreatingSucceeded200OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "lro/retryerror/put/201/creating/succeeded/200",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "product"
    ],
    mapper: Mappers.Product
  },
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    201: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginPutAsyncRelativeRetrySucceededOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "lro/retryerror/putasync/retry/succeeded",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "product"
    ],
    mapper: Mappers.Product
  },
  responses: {
    200: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    }
  },
  serializer
};

const beginDeleteProvisioning202Accepted200SucceededOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "lro/retryerror/delete/provisioning/202/accepted/200/succeeded",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysDeleteProvisioning202Accepted200SucceededHeaders
    },
    202: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysDeleteProvisioning202Accepted200SucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.LRORetrysDeleteProvisioning202Accepted200SucceededHeaders
    }
  },
  serializer
};

const beginDelete202Retry200OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "lro/retryerror/delete/202/retry/200",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    }
  },
  serializer
};

const beginDeleteAsyncRelativeRetrySucceededOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "lro/retryerror/deleteasync/retry/succeeded",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    }
  },
  serializer
};

const beginPost202Retry200OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "lro/retryerror/post/202/retry/200",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "product"
    ],
    mapper: Mappers.Product
  },
  responses: {
    202: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    }
  },
  serializer
};

const beginPostAsyncRelativeRetrySucceededOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "lro/retryerror/postasync/retry/succeeded",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "product"
    ],
    mapper: Mappers.Product
  },
  responses: {
    202: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    }
  },
  serializer
};
