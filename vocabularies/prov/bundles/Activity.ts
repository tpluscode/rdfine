import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { AgentMixin } from '../lib/Agent';
import { AssociationMixin } from '../lib/Association';
import { CommunicationMixin } from '../lib/Communication';
import { EndMixin } from '../lib/End';
import { EntityMixin } from '../lib/Entity';
import { InfluenceMixin } from '../lib/Influence';
import { LocationMixin } from '../lib/Location';
import { StartMixin } from '../lib/Start';
import { UsageMixin } from '../lib/Usage';

export const ActivityBundle = [
  ActivityMixin as Mixin,
  AgentMixin as Mixin,
  AssociationMixin as Mixin,
  CommunicationMixin as Mixin,
  EndMixin as Mixin,
  EntityMixin as Mixin,
  InfluenceMixin as Mixin,
  LocationMixin as Mixin,
  StartMixin as Mixin,
  UsageMixin as Mixin];
