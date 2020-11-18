import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LodgingBusinessMixin } from '../lib/LodgingBusiness';
import { HostelMixin } from '../lib/Hostel';

export const HostelBundle = [
  LodgingBusinessMixin as Mixin,
  HostelMixin as Mixin];
