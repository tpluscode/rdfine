import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';
import { RoofingContractorMixin } from '../RoofingContractor';

export const RoofingContractorDependencies = [
  HomeAndConstructionBusinessMixin as Mixin,
  RoofingContractorMixin as Mixin];
