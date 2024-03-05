// routes.js
import { applyFilters } from "../helpers/filters";
import axios from "axios";

import { Express } from "express";

export function configureRoutes(app: Express, apiKey: string) {
  app.get("/:formId/filteredResponses", async (req, res) => {
    console.log("apiKey", apiKey);
    try {
      const { formId } = req.params;
      const { filters, ...filloutParams } = req.query;
      const filtersParam =
        typeof filters === "string" ? JSON.parse(filters) : [];

      const response = await axios.get(
        `https://api.fillout.com/v1/api/forms/${formId}/submissions`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
          params: filloutParams ?? undefined,
        }
      );

      let filteredResponse = response.data;

      if (filtersParam.length) {
        const filteredResponses = applyFilters(
          response.data.responses,
          filtersParam
        );

        filteredResponse = {
          responses: filteredResponses,
          totalResponses: response.data.totalResponses,
          pageCount: response.data.pageCount,
        };
      }

      res.json(filteredResponse);
    } catch (error) {
      console.error("Error fetching responses:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
}
