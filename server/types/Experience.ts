export type Experience = {
  id: number;
  job_title: string;
  company_name: string;
  employment_date: {
    start_date: string;
    end_date: string;
  };
  description: string;
};
