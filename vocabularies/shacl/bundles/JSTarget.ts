import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../lib/JSExecutable';
import { TargetMixin } from '../lib/Target';
import { JSTargetMixin } from '../lib/JSTarget';

export const JSTargetBundle = [
  JSExecutableMixin as Mixin,
  TargetMixin as Mixin,
  JSTargetMixin as Mixin];
