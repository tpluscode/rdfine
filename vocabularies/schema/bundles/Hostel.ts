import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HostelMixin } from '../lib/Hostel';
import { LodgingBusinessMixin } from '../lib/LodgingBusiness';

export const HostelBundle = [
  HostelMixin as Mixin,
  LodgingBusinessMixin as Mixin];
