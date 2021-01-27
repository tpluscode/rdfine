import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { PublishMixin } from '../lib/Publish';

export const PublishBundle = [
  ActivityMixin as Mixin,
  PublishMixin as Mixin];
