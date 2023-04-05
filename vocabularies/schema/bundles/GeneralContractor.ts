import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GeneralContractorMixin } from '../lib/GeneralContractor';
import { HomeAndConstructionBusinessMixin } from '../lib/HomeAndConstructionBusiness';

export const GeneralContractorBundle = [
  GeneralContractorMixin as Mixin,
  HomeAndConstructionBusinessMixin as Mixin];
