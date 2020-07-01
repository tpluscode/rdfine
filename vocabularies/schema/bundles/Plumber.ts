import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';
import { PlumberMixin } from '../Plumber';

export const PlumberBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  PlumberMixin as Mixin];
