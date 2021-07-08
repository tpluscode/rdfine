import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  EnergyStarCertified: schema.EnergyStarCertified as NamedNode<'http://schema.org/EnergyStarCertified'>,
};

export type EnergyStarEnergyEfficiencyEnumeration =
  NamedNode<'http://schema.org/EnergyStarCertified'>;
