type ResponseT = {
  submissionId: string;
  submissionTime: string;
  lastUpdatedAt: string;
  questions: {
    id: string;
    name: string;
    type: string;
    value: any;
  }[];
  calculations: any[];
  urlParameters: any[];
  quiz: any;
  documents: any[];
};

type FilterClauseT = {
  id: string;
  condition: "equals" | "does_not_equal" | "greater_than" | "less_than";
  value: number | string;
};

export function applyFilters(responses: ResponseT[], filters: FilterClauseT[]) {
  return responses.filter((response) => {
    return filters.every((filter) => {
      const question = response.questions.find((q) => q.id === filter.id);
      if (!question) return false;

      switch (filter.condition) {
        case "equals":
          return question.value === filter.value;
        case "does_not_equal":
          return question.value !== filter.value;
        case "greater_than":
          return new Date(question.value) > new Date(filter.value);
        case "less_than":
          return new Date(question.value) < new Date(filter.value);
        default:
          return false;
      }
    });
  });
}
