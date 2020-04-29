import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLAskExecutableMixin } from '../SPARQLAskExecutable';
import { SPARQLSelectExecutableMixin } from '../SPARQLSelectExecutable';
import { TargetMixin } from '../Target';
import { SPARQLTargetMixin } from '../SPARQLTarget';

export const SPARQLTargetDependencies = [
  SPARQLAskExecutableMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin,
  TargetMixin as Mixin,
  SPARQLTargetMixin as Mixin];
