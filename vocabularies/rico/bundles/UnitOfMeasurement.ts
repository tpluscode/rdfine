import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConceptMixin } from '../lib/Concept';
import { ExtentMixin } from '../lib/Extent';
import { UnitOfMeasurementMixin } from '../lib/UnitOfMeasurement';

export const UnitOfMeasurementBundle = [
  ConceptMixin as Mixin,
  ExtentMixin as Mixin,
  UnitOfMeasurementMixin as Mixin];
