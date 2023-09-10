export interface UpdateProject {
  execute(data: UpdateProject.Params): Promise<UpdateProject.Result>;
}

export namespace UpdateProject {
  export type Params = {
    id: string;
    newData: {
      name: string;
      active: boolean;
      daysOfWork: Array<string>;
    };
  };
  export type Result = boolean;
}
