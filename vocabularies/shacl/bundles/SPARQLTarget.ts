import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLAskExecutableMixin } from '../lib/SPARQLAskExecutable';
import { SPARQLSelectExecutableMixin } from '../lib/SPARQLSelectExecutable';
import { TargetMixin } from '../lib/Target';
import { SPARQLTargetMixin } from '../lib/SPARQLTarget';

export const SPARQLTargetBundle = [
  SPARQLAskExecutableMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin,
  TargetMixin as Mixin,
  SPARQLTargetMixin as Mixin];
