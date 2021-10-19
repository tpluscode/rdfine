import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  ReturnLabelCustomerResponsibility: schema.ReturnLabelCustomerResponsibility,
  ReturnLabelDownloadAndPrint: schema.ReturnLabelDownloadAndPrint,
  ReturnLabelInBox: schema.ReturnLabelInBox,
};

export type ReturnLabelSourceEnumeration = typeof values[keyof typeof values];

export default values;
