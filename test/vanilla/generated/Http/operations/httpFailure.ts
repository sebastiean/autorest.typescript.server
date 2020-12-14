/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/httpFailureMappers";
import { AutoRestHttpInfrastructureTestServiceContext } from "../autoRestHttpInfrastructureTestServiceContext";

/** Class representing a HttpFailure. */
export class HttpFailure {
  private readonly client: AutoRestHttpInfrastructureTestServiceContext;

  /**
   * Create a HttpFailure.
   * @param {AutoRestHttpInfrastructureTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestHttpInfrastructureTestServiceContext) {
    this.client = client;
  }

  /**
   * Get empty error form server
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpFailureGetEmptyErrorResponse>
   */
  getEmptyError(options?: coreHttp.RequestOptionsBase): Promise<Models.HttpFailureGetEmptyErrorResponse>;
  /**
   * @param callback The callback
   */
  getEmptyError(callback: coreHttp.ServiceCallback<boolean>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getEmptyError(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<boolean>): void;
  getEmptyError(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<boolean>, callback?: coreHttp.ServiceCallback<boolean>): Promise<Models.HttpFailureGetEmptyErrorResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getEmptyErrorOperationSpec,
      callback) as Promise<Models.HttpFailureGetEmptyErrorResponse>;
  }

  /**
   * Get empty error form server
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpFailureGetNoModelErrorResponse>
   */
  getNoModelError(options?: coreHttp.RequestOptionsBase): Promise<Models.HttpFailureGetNoModelErrorResponse>;
  /**
   * @param callback The callback
   */
  getNoModelError(callback: coreHttp.ServiceCallback<boolean>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getNoModelError(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<boolean>): void;
  getNoModelError(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<boolean>, callback?: coreHttp.ServiceCallback<boolean>): Promise<Models.HttpFailureGetNoModelErrorResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNoModelErrorOperationSpec,
      callback) as Promise<Models.HttpFailureGetNoModelErrorResponse>;
  }

  /**
   * Get empty response from server
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpFailureGetNoModelEmptyResponse>
   */
  getNoModelEmpty(options?: coreHttp.RequestOptionsBase): Promise<Models.HttpFailureGetNoModelEmptyResponse>;
  /**
   * @param callback The callback
   */
  getNoModelEmpty(callback: coreHttp.ServiceCallback<boolean>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getNoModelEmpty(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<boolean>): void;
  getNoModelEmpty(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<boolean>, callback?: coreHttp.ServiceCallback<boolean>): Promise<Models.HttpFailureGetNoModelEmptyResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNoModelEmptyOperationSpec,
      callback) as Promise<Models.HttpFailureGetNoModelEmptyResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getEmptyErrorOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/emptybody/error",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getNoModelErrorOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/nomodel/error",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {}
  },
  serializer
};

const getNoModelEmptyOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/nomodel/empty",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {}
  },
  serializer
};
