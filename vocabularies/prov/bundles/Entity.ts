import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { AgentMixin } from '../lib/Agent';
import { AttributionMixin } from '../lib/Attribution';
import { BundleMixin } from '../lib/Bundle';
import { DerivationMixin } from '../lib/Derivation';
import { EntityMixin } from '../lib/Entity';
import { GenerationMixin } from '../lib/Generation';
import { InfluenceMixin } from '../lib/Influence';
import { InvalidationMixin } from '../lib/Invalidation';
import { LocationMixin } from '../lib/Location';
import { PrimarySourceMixin } from '../lib/PrimarySource';
import { QuotationMixin } from '../lib/Quotation';
import { RevisionMixin } from '../lib/Revision';

export const EntityBundle = [
  ActivityMixin as Mixin,
  AgentMixin as Mixin,
  AttributionMixin as Mixin,
  BundleMixin as Mixin,
  DerivationMixin as Mixin,
  EntityMixin as Mixin,
  GenerationMixin as Mixin,
  InfluenceMixin as Mixin,
  InvalidationMixin as Mixin,
  LocationMixin as Mixin,
  PrimarySourceMixin as Mixin,
  QuotationMixin as Mixin,
  RevisionMixin as Mixin];
