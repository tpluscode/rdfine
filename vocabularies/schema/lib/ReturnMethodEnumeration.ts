import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  ReturnAtKiosk: schema.ReturnAtKiosk,
  ReturnByMail: schema.ReturnByMail,
  ReturnInStore: schema.ReturnInStore,
};

export type ReturnMethodEnumeration = typeof values[keyof typeof values];

export default values;