import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ChurchMixin } from '../lib/Church';
import { CatholicChurchMixin } from '../lib/CatholicChurch';

export const CatholicChurchBundle = [
  ChurchMixin as Mixin,
  CatholicChurchMixin as Mixin];
