import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResidenceMixin } from '../Residence';
import { GatedResidenceCommunityMixin } from '../GatedResidenceCommunity';

export const GatedResidenceCommunityDependencies = [
  ResidenceMixin as Mixin,
  GatedResidenceCommunityMixin as Mixin];
