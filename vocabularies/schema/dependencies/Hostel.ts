import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LodgingBusinessMixin } from '../LodgingBusiness';
import { HostelMixin } from '../Hostel';

export const HostelDependencies = [
  LodgingBusinessMixin as Mixin,
  HostelMixin as Mixin];
