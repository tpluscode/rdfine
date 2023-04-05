import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MobileApplicationMixin } from '../lib/MobileApplication';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';

export const MobileApplicationBundle = [
  MobileApplicationMixin as Mixin,
  SoftwareApplicationMixin as Mixin];
