import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SoftwareApplicationMixin } from '../SoftwareApplication';
import { MobileApplicationMixin } from '../MobileApplication';

export const MobileApplicationBundle = [
  SoftwareApplicationMixin as Mixin,
  MobileApplicationMixin as Mixin];
