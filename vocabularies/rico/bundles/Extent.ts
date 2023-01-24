import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ExtentMixin } from '../lib/Extent';
import { ExtentTypeMixin } from '../lib/ExtentType';
import { InstantiationMixin } from '../lib/Instantiation';
import { RecordResourceMixin } from '../lib/RecordResource';
import { ThingMixin } from '../lib/Thing';
import { UnitOfMeasurementMixin } from '../lib/UnitOfMeasurement';

export const ExtentBundle = [
  ExtentMixin as Mixin,
  ExtentTypeMixin as Mixin,
  InstantiationMixin as Mixin,
  RecordResourceMixin as Mixin,
  ThingMixin as Mixin,
  UnitOfMeasurementMixin as Mixin];
