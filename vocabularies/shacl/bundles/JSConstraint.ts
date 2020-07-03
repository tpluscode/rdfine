import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../JSExecutable';
import { JSConstraintMixin } from '../JSConstraint';

export const JSConstraintBundle = [
  JSExecutableMixin as Mixin,
  JSConstraintMixin as Mixin];
