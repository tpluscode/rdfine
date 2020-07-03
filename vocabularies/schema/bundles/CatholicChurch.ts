import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ChurchMixin } from '../Church';
import { CatholicChurchMixin } from '../CatholicChurch';

export const CatholicChurchBundle = [
  ChurchMixin as Mixin,
  CatholicChurchMixin as Mixin];
