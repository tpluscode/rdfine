import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ExtentMixin } from '../lib/Extent.js';
import { ExtentTypeMixin } from '../lib/ExtentType.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';
import { ThingMixin } from '../lib/Thing.js';
import { UnitOfMeasurementMixin } from '../lib/UnitOfMeasurement.js';

export const ExtentBundle = [
  ExtentMixin as Mixin,
  ExtentTypeMixin as Mixin,
  InstantiationMixin as Mixin,
  RecordResourceMixin as Mixin,
  ThingMixin as Mixin,
  UnitOfMeasurementMixin as Mixin];
