import { IPage } from '@/components/core/blocks/basic/Page';
import { BlockType } from '@/constants';

export interface IBlock<T extends IBlockData = any> {
  name: string;
  type: BlockType;
  Panel: () => React.ReactNode;
  createInstance: (payload?: RecursivePartial<T>) => T;
  validParentType: BlockType[];
}

export interface IBlockData<
  K extends { [key: string]: any } = any,
  T extends any = any
> {
  type: BlockType;
  data: {
    value: T;
    hidden?: boolean;
    shadow?: boolean; // Child nodes cannot be selected
  };
  attributes: K;
  children: IBlockData[];
}

export interface IEmailTemplate {
  content: IPage;
  subject: string;
  subTitle: string;
}

export interface CreateInstance<T extends any = any> {
  (payload?: RecursivePartial<T>): T;
}

export type RecursivePartial<T> = {
  [P in keyof T]?: Partial<T[P]>;
};
