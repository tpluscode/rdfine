import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSConstraintMixin } from '../lib/JSConstraint';
import { JSExecutableMixin } from '../lib/JSExecutable';

export const JSConstraintBundle = [
  JSConstraintMixin as Mixin,
  JSExecutableMixin as Mixin];
