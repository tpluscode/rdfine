import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type RestrictedDiet = NamedNode;

export default {
  DiabeticDiet: schema.DiabeticDiet,
  GlutenFreeDiet: schema.GlutenFreeDiet,
  HalalDiet: schema.HalalDiet,
  HinduDiet: schema.HinduDiet,
  KosherDiet: schema.KosherDiet,
  LowCalorieDiet: schema.LowCalorieDiet,
  LowFatDiet: schema.LowFatDiet,
  LowLactoseDiet: schema.LowLactoseDiet,
  LowSaltDiet: schema.LowSaltDiet,
  VeganDiet: schema.VeganDiet,
  VegetarianDiet: schema.VegetarianDiet,
};
