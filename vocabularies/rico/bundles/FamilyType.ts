import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FamilyMixin } from '../lib/Family';
import { FamilyTypeMixin } from '../lib/FamilyType';
import { TypeMixin } from '../lib/Type';

export const FamilyTypeBundle = [
  FamilyMixin as Mixin,
  FamilyTypeMixin as Mixin,
  TypeMixin as Mixin];
