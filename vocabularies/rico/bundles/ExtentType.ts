import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ExtentMixin } from '../lib/Extent';
import { ExtentTypeMixin } from '../lib/ExtentType';
import { TypeMixin } from '../lib/Type';

export const ExtentTypeBundle = [
  ExtentMixin as Mixin,
  ExtentTypeMixin as Mixin,
  TypeMixin as Mixin];
