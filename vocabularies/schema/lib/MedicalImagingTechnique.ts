import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  CT: schema.CT,
  MRI: schema.MRI,
  PET: schema.PET,
  Radiography: schema.Radiography,
  Ultrasound: schema.Ultrasound,
  XRay: schema.XRay,
};

export type MedicalImagingTechnique = typeof values[keyof typeof values];

export default values;
