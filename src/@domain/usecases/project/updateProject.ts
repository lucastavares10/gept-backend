export interface UpdateProject {
  execute(data: UpdateProjectParams): Promise<UpdateProjectResult>;
}

export class UpdateProjectParams {
  id: string;
  newData: {
    name?: string;
    active?: boolean;
    description?: string;
    daysOfWork?: Array<string>;
  };
}
export class UpdateProjectResult {
  updated: boolean;
}
