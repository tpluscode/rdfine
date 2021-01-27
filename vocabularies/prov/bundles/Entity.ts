import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntityMixin } from '../lib/Entity';
import { BundleMixin } from '../lib/Bundle';
import { LocationMixin } from '../lib/Location';
import { AttributionMixin } from '../lib/Attribution';
import { DerivationMixin } from '../lib/Derivation';
import { GenerationMixin } from '../lib/Generation';
import { InfluenceMixin } from '../lib/Influence';
import { InvalidationMixin } from '../lib/Invalidation';
import { PrimarySourceMixin } from '../lib/PrimarySource';
import { QuotationMixin } from '../lib/Quotation';
import { RevisionMixin } from '../lib/Revision';
import { AgentMixin } from '../lib/Agent';
import { ActivityMixin } from '../lib/Activity';

export const EntityBundle = [
  EntityMixin as Mixin,
  BundleMixin as Mixin,
  LocationMixin as Mixin,
  AttributionMixin as Mixin,
  DerivationMixin as Mixin,
  GenerationMixin as Mixin,
  InfluenceMixin as Mixin,
  InvalidationMixin as Mixin,
  PrimarySourceMixin as Mixin,
  QuotationMixin as Mixin,
  RevisionMixin as Mixin,
  AgentMixin as Mixin,
  ActivityMixin as Mixin];
