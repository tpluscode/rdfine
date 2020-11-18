import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResidenceMixin } from '../lib/Residence';
import { GatedResidenceCommunityMixin } from '../lib/GatedResidenceCommunity';

export const GatedResidenceCommunityBundle = [
  ResidenceMixin as Mixin,
  GatedResidenceCommunityMixin as Mixin];
