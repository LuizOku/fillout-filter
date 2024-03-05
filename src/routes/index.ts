import { applyFilters, FilterClauseT } from "../helpers/filters";
import axios, { AxiosResponse } from "axios";
import { Request, Response, Express } from "express";

export function configureRoutes(app: Express, apiKey: string): void {
  app.get("/:formId/filteredResponses", async (req: Request, res: Response) => {
    try {
      const { formId } = req.params;
      const { filters, ...filloutParams } = req.query;
      const filtersParam: FilterClauseT[] =
        typeof filters === "string" ? JSON.parse(filters) : [];

      const response: AxiosResponse = await axios.get(
        `https://api.fillout.com/v1/api/forms/${formId}/submissions`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
          params: filloutParams ?? undefined,
        }
      );

      let filteredResponse: any = response.data;

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
    } catch (error: any) {
      console.error("Error fetching responses:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
}
