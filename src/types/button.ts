export interface Button {
  children: any;
  link?: string | undefined;
  primary?: true | undefined;
  clickHandler?: (e: React.MouseEvent) => any;
}
