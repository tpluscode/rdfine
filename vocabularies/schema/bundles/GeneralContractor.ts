import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../lib/HomeAndConstructionBusiness';
import { GeneralContractorMixin } from '../lib/GeneralContractor';

export const GeneralContractorBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  GeneralContractorMixin as Mixin];
