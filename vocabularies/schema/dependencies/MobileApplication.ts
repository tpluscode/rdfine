import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SoftwareApplicationMixin } from '../SoftwareApplication';
import { MobileApplicationMixin } from '../MobileApplication';

export const MobileApplicationDependencies = [
  SoftwareApplicationMixin as Mixin,
  MobileApplicationMixin as Mixin];
