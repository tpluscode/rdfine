import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResidenceMixin } from '../Residence';
import { GatedResidenceCommunityMixin } from '../GatedResidenceCommunity';

export const GatedResidenceCommunityBundle = [
  ResidenceMixin as Mixin,
  GatedResidenceCommunityMixin as Mixin];
