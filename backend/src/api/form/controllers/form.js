"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::form.form");

// Alternative if you need custom behavior:
/*
module.exports = createCoreController("api::form.form", ({ strapi }) => ({
  async create(ctx) {
    try {
      // Let Strapi handle the default creation
      const response = await super.create(ctx);
      
      // Add any custom non-email logic here
      
      return response;
    } catch (error) {
      ctx.throw(500, "Form submission failed", { error });
    }
  },
}));
*/