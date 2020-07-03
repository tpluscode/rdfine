import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';
import { GeneralContractorMixin } from '../GeneralContractor';

export const GeneralContractorBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  GeneralContractorMixin as Mixin];
