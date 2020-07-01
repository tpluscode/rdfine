import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AbstractResultMixin } from '../AbstractResult';
import { SeverityMixin } from '../Severity';
import { ConstraintComponentMixin } from '../ConstraintComponent';
import { ShapeMixin } from '../Shape';

export const AbstractResultBundle = [
  AbstractResultMixin as Mixin,
  SeverityMixin as Mixin,
  ConstraintComponentMixin as Mixin,
  ShapeMixin as Mixin];
