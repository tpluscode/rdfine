import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLAskExecutableMixin } from '../lib/SPARQLAskExecutable';
import { SPARQLSelectExecutableMixin } from '../lib/SPARQLSelectExecutable';
import { TargetTypeMixin } from '../lib/TargetType';
import { SPARQLTargetTypeMixin } from '../lib/SPARQLTargetType';

export const SPARQLTargetTypeBundle = [
  SPARQLAskExecutableMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin,
  TargetTypeMixin as Mixin,
  SPARQLTargetTypeMixin as Mixin];
