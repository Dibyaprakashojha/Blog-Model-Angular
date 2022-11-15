export interface BlogModel {
  blogId: number;
  blogTitle: string | null | undefined;
  blogContent: string | null | undefined;
  addedAtDate: Date;
}
