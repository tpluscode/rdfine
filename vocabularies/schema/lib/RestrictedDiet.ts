import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  DiabeticDiet: schema.DiabeticDiet as NamedNode<'http://schema.org/DiabeticDiet'>,
  GlutenFreeDiet: schema.GlutenFreeDiet as NamedNode<'http://schema.org/GlutenFreeDiet'>,
  HalalDiet: schema.HalalDiet as NamedNode<'http://schema.org/HalalDiet'>,
  HinduDiet: schema.HinduDiet as NamedNode<'http://schema.org/HinduDiet'>,
  KosherDiet: schema.KosherDiet as NamedNode<'http://schema.org/KosherDiet'>,
  LowCalorieDiet: schema.LowCalorieDiet as NamedNode<'http://schema.org/LowCalorieDiet'>,
  LowFatDiet: schema.LowFatDiet as NamedNode<'http://schema.org/LowFatDiet'>,
  LowLactoseDiet: schema.LowLactoseDiet as NamedNode<'http://schema.org/LowLactoseDiet'>,
  LowSaltDiet: schema.LowSaltDiet as NamedNode<'http://schema.org/LowSaltDiet'>,
  VeganDiet: schema.VeganDiet as NamedNode<'http://schema.org/VeganDiet'>,
  VegetarianDiet: schema.VegetarianDiet as NamedNode<'http://schema.org/VegetarianDiet'>,
};

export type RestrictedDiet =
  NamedNode<'http://schema.org/DiabeticDiet'>
  | NamedNode<'http://schema.org/GlutenFreeDiet'>
  | NamedNode<'http://schema.org/HalalDiet'>
  | NamedNode<'http://schema.org/HinduDiet'>
  | NamedNode<'http://schema.org/KosherDiet'>
  | NamedNode<'http://schema.org/LowCalorieDiet'>
  | NamedNode<'http://schema.org/LowFatDiet'>
  | NamedNode<'http://schema.org/LowLactoseDiet'>
  | NamedNode<'http://schema.org/LowSaltDiet'>
  | NamedNode<'http://schema.org/VeganDiet'>
  | NamedNode<'http://schema.org/VegetarianDiet'>;
