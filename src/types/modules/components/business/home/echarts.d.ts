export interface PropsHomeEcharts {
  visit:
    | {
        total: number;
        days: string[];
        page_view: number[];
      }
    | undefined;
}
