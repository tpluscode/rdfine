import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AbstractResultMixin } from '../lib/AbstractResult';
import { ConstraintComponentMixin } from '../lib/ConstraintComponent';
import { SeverityMixin } from '../lib/Severity';
import { ShapeMixin } from '../lib/Shape';

export const AbstractResultBundle = [
  AbstractResultMixin as Mixin,
  ConstraintComponentMixin as Mixin,
  SeverityMixin as Mixin,
  ShapeMixin as Mixin];
