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
import * as Mappers from "../models/petsMappers";
import { AdditionalPropertiesClientContext } from "../additionalPropertiesClientContext";

/** Class representing a Pets. */
export class Pets {
  private readonly client: AdditionalPropertiesClientContext;

  /**
   * Create a Pets.
   * @param {AdditionalPropertiesClientContext} client Reference to the service client.
   */
  constructor(client: AdditionalPropertiesClientContext) {
    this.client = client;
  }

  /**
   * Create a Pet which contains more properties than what is defined.
   * @param createParameters
   * @param [options] The optional parameters
   * @returns Promise<Models.PetsCreateAPTrueResponse>
   */
  createAPTrue(createParameters: Models.PetAPTrue, options?: coreHttp.RequestOptionsBase): Promise<Models.PetsCreateAPTrueResponse>;
  /**
   * @param createParameters
   * @param callback The callback
   */
  createAPTrue(createParameters: Models.PetAPTrue, callback: coreHttp.ServiceCallback<Models.PetAPTrue>): void;
  /**
   * @param createParameters
   * @param options The optional parameters
   * @param callback The callback
   */
  createAPTrue(createParameters: Models.PetAPTrue, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.PetAPTrue>): void;
  createAPTrue(createParameters: Models.PetAPTrue, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.PetAPTrue>, callback?: coreHttp.ServiceCallback<Models.PetAPTrue>): Promise<Models.PetsCreateAPTrueResponse> {
    return this.client.sendOperationRequest(
      {
        createParameters,
        options
      },
      createAPTrueOperationSpec,
      callback) as Promise<Models.PetsCreateAPTrueResponse>;
  }

  /**
   * Create a CatAPTrue which contains more properties than what is defined.
   * @param createParameters
   * @param [options] The optional parameters
   * @returns Promise<Models.PetsCreateCatAPTrueResponse>
   */
  createCatAPTrue(createParameters: Models.CatAPTrue, options?: coreHttp.RequestOptionsBase): Promise<Models.PetsCreateCatAPTrueResponse>;
  /**
   * @param createParameters
   * @param callback The callback
   */
  createCatAPTrue(createParameters: Models.CatAPTrue, callback: coreHttp.ServiceCallback<Models.CatAPTrue>): void;
  /**
   * @param createParameters
   * @param options The optional parameters
   * @param callback The callback
   */
  createCatAPTrue(createParameters: Models.CatAPTrue, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.CatAPTrue>): void;
  createCatAPTrue(createParameters: Models.CatAPTrue, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.CatAPTrue>, callback?: coreHttp.ServiceCallback<Models.CatAPTrue>): Promise<Models.PetsCreateCatAPTrueResponse> {
    return this.client.sendOperationRequest(
      {
        createParameters,
        options
      },
      createCatAPTrueOperationSpec,
      callback) as Promise<Models.PetsCreateCatAPTrueResponse>;
  }

  /**
   * Create a Pet which contains more properties than what is defined.
   * @param createParameters
   * @param [options] The optional parameters
   * @returns Promise<Models.PetsCreateAPObjectResponse>
   */
  createAPObject(createParameters: Models.PetAPObject, options?: coreHttp.RequestOptionsBase): Promise<Models.PetsCreateAPObjectResponse>;
  /**
   * @param createParameters
   * @param callback The callback
   */
  createAPObject(createParameters: Models.PetAPObject, callback: coreHttp.ServiceCallback<Models.PetAPObject>): void;
  /**
   * @param createParameters
   * @param options The optional parameters
   * @param callback The callback
   */
  createAPObject(createParameters: Models.PetAPObject, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.PetAPObject>): void;
  createAPObject(createParameters: Models.PetAPObject, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.PetAPObject>, callback?: coreHttp.ServiceCallback<Models.PetAPObject>): Promise<Models.PetsCreateAPObjectResponse> {
    return this.client.sendOperationRequest(
      {
        createParameters,
        options
      },
      createAPObjectOperationSpec,
      callback) as Promise<Models.PetsCreateAPObjectResponse>;
  }

  /**
   * Create a Pet which contains more properties than what is defined.
   * @param createParameters
   * @param [options] The optional parameters
   * @returns Promise<Models.PetsCreateAPStringResponse>
   */
  createAPString(createParameters: Models.PetAPString, options?: coreHttp.RequestOptionsBase): Promise<Models.PetsCreateAPStringResponse>;
  /**
   * @param createParameters
   * @param callback The callback
   */
  createAPString(createParameters: Models.PetAPString, callback: coreHttp.ServiceCallback<Models.PetAPString>): void;
  /**
   * @param createParameters
   * @param options The optional parameters
   * @param callback The callback
   */
  createAPString(createParameters: Models.PetAPString, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.PetAPString>): void;
  createAPString(createParameters: Models.PetAPString, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.PetAPString>, callback?: coreHttp.ServiceCallback<Models.PetAPString>): Promise<Models.PetsCreateAPStringResponse> {
    return this.client.sendOperationRequest(
      {
        createParameters,
        options
      },
      createAPStringOperationSpec,
      callback) as Promise<Models.PetsCreateAPStringResponse>;
  }

  /**
   * Create a Pet which contains more properties than what is defined.
   * @param createParameters
   * @param [options] The optional parameters
   * @returns Promise<Models.PetsCreateAPInPropertiesResponse>
   */
  createAPInProperties(createParameters: Models.PetAPInProperties, options?: coreHttp.RequestOptionsBase): Promise<Models.PetsCreateAPInPropertiesResponse>;
  /**
   * @param createParameters
   * @param callback The callback
   */
  createAPInProperties(createParameters: Models.PetAPInProperties, callback: coreHttp.ServiceCallback<Models.PetAPInProperties>): void;
  /**
   * @param createParameters
   * @param options The optional parameters
   * @param callback The callback
   */
  createAPInProperties(createParameters: Models.PetAPInProperties, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.PetAPInProperties>): void;
  createAPInProperties(createParameters: Models.PetAPInProperties, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.PetAPInProperties>, callback?: coreHttp.ServiceCallback<Models.PetAPInProperties>): Promise<Models.PetsCreateAPInPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        createParameters,
        options
      },
      createAPInPropertiesOperationSpec,
      callback) as Promise<Models.PetsCreateAPInPropertiesResponse>;
  }

  /**
   * Create a Pet which contains more properties than what is defined.
   * @param createParameters
   * @param [options] The optional parameters
   * @returns Promise<Models.PetsCreateAPInPropertiesWithAPStringResponse>
   */
  createAPInPropertiesWithAPString(createParameters: Models.PetAPInPropertiesWithAPString, options?: coreHttp.RequestOptionsBase): Promise<Models.PetsCreateAPInPropertiesWithAPStringResponse>;
  /**
   * @param createParameters
   * @param callback The callback
   */
  createAPInPropertiesWithAPString(createParameters: Models.PetAPInPropertiesWithAPString, callback: coreHttp.ServiceCallback<Models.PetAPInPropertiesWithAPString>): void;
  /**
   * @param createParameters
   * @param options The optional parameters
   * @param callback The callback
   */
  createAPInPropertiesWithAPString(createParameters: Models.PetAPInPropertiesWithAPString, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.PetAPInPropertiesWithAPString>): void;
  createAPInPropertiesWithAPString(createParameters: Models.PetAPInPropertiesWithAPString, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.PetAPInPropertiesWithAPString>, callback?: coreHttp.ServiceCallback<Models.PetAPInPropertiesWithAPString>): Promise<Models.PetsCreateAPInPropertiesWithAPStringResponse> {
    return this.client.sendOperationRequest(
      {
        createParameters,
        options
      },
      createAPInPropertiesWithAPStringOperationSpec,
      callback) as Promise<Models.PetsCreateAPInPropertiesWithAPStringResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const createAPTrueOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "additionalProperties/true",
  requestBody: {
    parameterPath: "createParameters",
    mapper: {
      ...Mappers.PetAPTrue,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PetAPTrue
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createCatAPTrueOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "additionalProperties/true-subclass",
  requestBody: {
    parameterPath: "createParameters",
    mapper: {
      ...Mappers.CatAPTrue,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CatAPTrue
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createAPObjectOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "additionalProperties/type/object",
  requestBody: {
    parameterPath: "createParameters",
    mapper: {
      ...Mappers.PetAPObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PetAPObject
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createAPStringOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "additionalProperties/type/string",
  requestBody: {
    parameterPath: "createParameters",
    mapper: {
      ...Mappers.PetAPString,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PetAPString
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createAPInPropertiesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "additionalProperties/in/properties",
  requestBody: {
    parameterPath: "createParameters",
    mapper: {
      ...Mappers.PetAPInProperties,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PetAPInProperties
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createAPInPropertiesWithAPStringOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "additionalProperties/in/properties/with/additionalProperties/string",
  requestBody: {
    parameterPath: "createParameters",
    mapper: {
      ...Mappers.PetAPInPropertiesWithAPString,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PetAPInPropertiesWithAPString
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
