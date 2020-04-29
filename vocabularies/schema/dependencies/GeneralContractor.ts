import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';
import { GeneralContractorMixin } from '../GeneralContractor';

export const GeneralContractorDependencies = [
  HomeAndConstructionBusinessMixin as Mixin,
  GeneralContractorMixin as Mixin];
