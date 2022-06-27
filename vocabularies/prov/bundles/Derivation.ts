import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { DerivationMixin } from '../lib/Derivation';
import { EntityInfluenceMixin } from '../lib/EntityInfluence';
import { GenerationMixin } from '../lib/Generation';
import { UsageMixin } from '../lib/Usage';

export const DerivationBundle = [
  ActivityMixin as Mixin,
  DerivationMixin as Mixin,
  EntityInfluenceMixin as Mixin,
  GenerationMixin as Mixin,
  UsageMixin as Mixin];
