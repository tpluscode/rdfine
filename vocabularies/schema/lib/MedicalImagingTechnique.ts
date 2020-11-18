import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  CT: schema.CT as NamedNode<'http://schema.org/CT'>,
  MRI: schema.MRI as NamedNode<'http://schema.org/MRI'>,
  PET: schema.PET as NamedNode<'http://schema.org/PET'>,
  Radiography: schema.Radiography as NamedNode<'http://schema.org/Radiography'>,
  Ultrasound: schema.Ultrasound as NamedNode<'http://schema.org/Ultrasound'>,
  XRay: schema.XRay as NamedNode<'http://schema.org/XRay'>,
};

export type MedicalImagingTechnique = 
  NamedNode<'http://schema.org/CT'>
  | NamedNode<'http://schema.org/MRI'>
  | NamedNode<'http://schema.org/PET'>
  | NamedNode<'http://schema.org/Radiography'>
  | NamedNode<'http://schema.org/Ultrasound'>
  | NamedNode<'http://schema.org/XRay'>;
