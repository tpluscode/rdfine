import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../JSExecutable';
import { TargetMixin } from '../Target';
import { JSTargetMixin } from '../JSTarget';

export const JSTargetDependencies = [
  JSExecutableMixin as Mixin,
  TargetMixin as Mixin,
  JSTargetMixin as Mixin];
