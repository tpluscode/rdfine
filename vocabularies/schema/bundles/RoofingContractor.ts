import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../lib/HomeAndConstructionBusiness';
import { RoofingContractorMixin } from '../lib/RoofingContractor';

export const RoofingContractorBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  RoofingContractorMixin as Mixin];
