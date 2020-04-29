import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLAskExecutableMixin } from '../SPARQLAskExecutable';
import { SPARQLSelectExecutableMixin } from '../SPARQLSelectExecutable';
import { TargetTypeMixin } from '../TargetType';
import { SPARQLTargetTypeMixin } from '../SPARQLTargetType';

export const SPARQLTargetTypeDependencies = [
  SPARQLAskExecutableMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin,
  TargetTypeMixin as Mixin,
  SPARQLTargetTypeMixin as Mixin];
