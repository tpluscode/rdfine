import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../lib/JSExecutable';
import { JSConstraintMixin } from '../lib/JSConstraint';

export const JSConstraintBundle = [
  JSExecutableMixin as Mixin,
  JSConstraintMixin as Mixin];
