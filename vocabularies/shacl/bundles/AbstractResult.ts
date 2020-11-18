import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AbstractResultMixin } from '../lib/AbstractResult';
import { SeverityMixin } from '../lib/Severity';
import { ConstraintComponentMixin } from '../lib/ConstraintComponent';
import { ShapeMixin } from '../lib/Shape';

export const AbstractResultBundle = [
  AbstractResultMixin as Mixin,
  SeverityMixin as Mixin,
  ConstraintComponentMixin as Mixin,
  ShapeMixin as Mixin];
