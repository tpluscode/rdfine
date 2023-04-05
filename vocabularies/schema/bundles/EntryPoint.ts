import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntryPointMixin } from '../lib/EntryPoint';
import { IntangibleMixin } from '../lib/Intangible';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';

export const EntryPointBundle = [
  EntryPointMixin as Mixin,
  IntangibleMixin as Mixin,
  SoftwareApplicationMixin as Mixin];
