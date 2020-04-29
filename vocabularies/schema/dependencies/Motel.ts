import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LodgingBusinessMixin } from '../LodgingBusiness';
import { MotelMixin } from '../Motel';

export const MotelDependencies = [
  LodgingBusinessMixin as Mixin,
  MotelMixin as Mixin];
