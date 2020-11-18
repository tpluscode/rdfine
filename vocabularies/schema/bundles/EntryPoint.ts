import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { EntryPointMixin } from '../lib/EntryPoint';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';

export const EntryPointBundle = [
  IntangibleMixin as Mixin,
  EntryPointMixin as Mixin,
  SoftwareApplicationMixin as Mixin];
