import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ChurchMixin } from '../Church';
import { CatholicChurchMixin } from '../CatholicChurch';

export const CatholicChurchDependencies = [
  ChurchMixin as Mixin,
  CatholicChurchMixin as Mixin];
