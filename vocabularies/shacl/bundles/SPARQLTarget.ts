import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLAskExecutableMixin } from '../lib/SPARQLAskExecutable';
import { SPARQLSelectExecutableMixin } from '../lib/SPARQLSelectExecutable';
import { SPARQLTargetMixin } from '../lib/SPARQLTarget';
import { TargetMixin } from '../lib/Target';

export const SPARQLTargetBundle = [
  SPARQLAskExecutableMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin,
  SPARQLTargetMixin as Mixin,
  TargetMixin as Mixin];
