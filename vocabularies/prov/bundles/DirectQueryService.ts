import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SoftwareAgentMixin } from '../lib/SoftwareAgent';
import { DirectQueryServiceMixin } from '../lib/DirectQueryService';

export const DirectQueryServiceBundle = [
  SoftwareAgentMixin as Mixin,
  DirectQueryServiceMixin as Mixin];
