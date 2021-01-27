import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntityInfluenceMixin } from '../lib/EntityInfluence';
import { ActivityMixin } from '../lib/Activity';
import { GenerationMixin } from '../lib/Generation';
import { UsageMixin } from '../lib/Usage';
import { DerivationMixin } from '../lib/Derivation';

export const DerivationBundle = [
  EntityInfluenceMixin as Mixin,
  ActivityMixin as Mixin,
  GenerationMixin as Mixin,
  UsageMixin as Mixin,
  DerivationMixin as Mixin];
