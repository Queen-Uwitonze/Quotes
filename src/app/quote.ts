export class Quote {
  public showDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public author: string,
    public submittedBy: string,
    public upVote: number,
    public downVote: number,
    public completeDate: Date
  ) {
    this.showDescription = false;
  }
}
