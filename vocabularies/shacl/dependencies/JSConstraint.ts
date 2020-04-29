import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../JSExecutable';
import { JSConstraintMixin } from '../JSConstraint';

export const JSConstraintDependencies = [
  JSExecutableMixin as Mixin,
  JSConstraintMixin as Mixin];
