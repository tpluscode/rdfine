import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { EntryPointMixin } from '../EntryPoint';
import { SoftwareApplicationMixin } from '../SoftwareApplication';

export const EntryPointBundle = [
  IntangibleMixin as Mixin,
  EntryPointMixin as Mixin,
  SoftwareApplicationMixin as Mixin];
