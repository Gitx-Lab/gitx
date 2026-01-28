export interface ApiGenerateRequest {
  name: string;
  description: string;
}

export interface ApiGenerateResponse {
  path: string;
  createdAt: string;
}
