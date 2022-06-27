import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GatedResidenceCommunityMixin } from '../lib/GatedResidenceCommunity';
import { ResidenceMixin } from '../lib/Residence';

export const GatedResidenceCommunityBundle = [
  GatedResidenceCommunityMixin as Mixin,
  ResidenceMixin as Mixin];
