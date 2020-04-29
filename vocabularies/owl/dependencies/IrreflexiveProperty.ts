import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectPropertyMixin } from '../ObjectProperty';
import { IrreflexivePropertyMixin } from '../IrreflexiveProperty';

export const IrreflexivePropertyDependencies = [
  ObjectPropertyMixin as Mixin,
  IrreflexivePropertyMixin as Mixin];
