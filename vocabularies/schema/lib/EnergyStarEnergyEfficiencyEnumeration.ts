import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  EnergyStarCertified: schema.EnergyStarCertified,
};

export type EnergyStarEnergyEfficiencyEnumeration = typeof values[keyof typeof values];

export default values;
