import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLAskExecutableMixin } from '../lib/SPARQLAskExecutable';
import { SPARQLSelectExecutableMixin } from '../lib/SPARQLSelectExecutable';
import { SPARQLTargetTypeMixin } from '../lib/SPARQLTargetType';
import { TargetTypeMixin } from '../lib/TargetType';

export const SPARQLTargetTypeBundle = [
  SPARQLAskExecutableMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin,
  SPARQLTargetTypeMixin as Mixin,
  TargetTypeMixin as Mixin];
