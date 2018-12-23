"use strict";

const axios = require("axios");
const baseURL = "https://arcadia-api.xyz/api/v1";

/**
 * @param {string} token arcadia-api.xyz's token
 */

class arcadiaJS {
  constructor(token) {
    this.token = token;
  }

  /**
   * Get image of an endpoint
   * @param {string} endpoint Name of the endpoint
   * @param {string} parameter The first parameter of the endpoint (URL/TEXT)
   * @param {string} url Url of the image given
   * @returns {Promise<Object>}
   */
  getImage(endpoint, parameter, url) {
    return new Promise(async(resolve, reject) => {
      if(!this.token) throw reject("[ARCADIA.JS][GET-IMAGE] token is not specified.");
      if(!endpoint) throw reject("[ARCADIA.JS][GET-IMAGE] endpoint is not specified.");
      if(!parameter) throw reject("[ARCADIA.JS][GET-IMAGE] parameter is not specified.");
      if(!url) throw reject("[ARCADIA.JS][GET-IMAGE] url is not specified.");

      this.getEndpoints().then(async(endpoints) => {
        if(!endpoints.find(e => e === endpoint)) throw reject("[ARCADIA.JS][GET-IMAGE] This endpoint does not exist.");
        await axios.get(`${baseURL}/${endpoint}?${parameter}=${url}`, {
          headers: {
            Authorization: this.token
          },
          responseType: "arraybuffer"
        })
          .then(async(res) => {
            if(!res.data) throw reject("[ARCADIA.JS][GET-IMAGE] Buffer not found.");
            await resolve(res.data);
          })
            .catch((err) => {
              if(err) throw reject(`[ARCADIA.JS][GET-IMAGE] Error:\n${err.text}`);
            });
      })
    })
      .catch((err) => {
        if(err) throw new Error(`[ARCADIA.JS][GET-IMAGE] Error:\n${err.text}`);
      });
  }

  /**
   * Get all endpoints of arcadia-api.xyz
   * @returns {Promise<Array>}
   */
  getEndpoints() {
    return new Promise(async(resolve, reject) => {
      await axios.get(`${baseURL}`).then(async(res) => {
        if(!res.data) throw reject("[ARCADIA.JS][GET-ENDPOINTS] Endpoints not found.");
        await resolve(res.data.endpoints);
      })
        .catch((err) => {
          if(err) throw reject(`[ARCADIA.JS][GET-ENDPOINTS] Error:\n${err.text}`);
        });
    })
      .catch((err) => {
        if(err) throw new Error(`[ARCADIA.JS][GET-ENDPOINTS] Error:\n${err.text}`);
      });
  }
}

module.exports = arcadiaJS;
