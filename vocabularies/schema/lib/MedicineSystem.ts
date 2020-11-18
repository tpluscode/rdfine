import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  Ayurvedic: schema.Ayurvedic as NamedNode<'http://schema.org/Ayurvedic'>,
  Chiropractic: schema.Chiropractic as NamedNode<'http://schema.org/Chiropractic'>,
  Homeopathic: schema.Homeopathic as NamedNode<'http://schema.org/Homeopathic'>,
  Osteopathic: schema.Osteopathic as NamedNode<'http://schema.org/Osteopathic'>,
  TraditionalChinese: schema.TraditionalChinese as NamedNode<'http://schema.org/TraditionalChinese'>,
  WesternConventional: schema.WesternConventional as NamedNode<'http://schema.org/WesternConventional'>,
};

export type MedicineSystem = 
  NamedNode<'http://schema.org/Ayurvedic'>
  | NamedNode<'http://schema.org/Chiropractic'>
  | NamedNode<'http://schema.org/Homeopathic'>
  | NamedNode<'http://schema.org/Osteopathic'>
  | NamedNode<'http://schema.org/TraditionalChinese'>
  | NamedNode<'http://schema.org/WesternConventional'>;
