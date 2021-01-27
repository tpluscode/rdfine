import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocationMixin } from '../lib/Location';
import { EntityMixin } from '../lib/Entity';
import { AssociationMixin } from '../lib/Association';
import { CommunicationMixin } from '../lib/Communication';
import { EndMixin } from '../lib/End';
import { InfluenceMixin } from '../lib/Influence';
import { StartMixin } from '../lib/Start';
import { UsageMixin } from '../lib/Usage';
import { AgentMixin } from '../lib/Agent';
import { ActivityMixin } from '../lib/Activity';

export const ActivityBundle = [
  LocationMixin as Mixin,
  EntityMixin as Mixin,
  AssociationMixin as Mixin,
  CommunicationMixin as Mixin,
  EndMixin as Mixin,
  InfluenceMixin as Mixin,
  StartMixin as Mixin,
  UsageMixin as Mixin,
  AgentMixin as Mixin,
  ActivityMixin as Mixin];
