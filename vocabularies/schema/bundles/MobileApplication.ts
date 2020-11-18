import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';
import { MobileApplicationMixin } from '../lib/MobileApplication';

export const MobileApplicationBundle = [
  SoftwareApplicationMixin as Mixin,
  MobileApplicationMixin as Mixin];
