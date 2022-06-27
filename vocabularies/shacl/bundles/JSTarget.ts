import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../lib/JSExecutable';
import { JSTargetMixin } from '../lib/JSTarget';
import { TargetMixin } from '../lib/Target';

export const JSTargetBundle = [
  JSExecutableMixin as Mixin,
  JSTargetMixin as Mixin,
  TargetMixin as Mixin];
