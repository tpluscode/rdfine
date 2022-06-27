import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DirectQueryServiceMixin } from '../lib/DirectQueryService';
import { SoftwareAgentMixin } from '../lib/SoftwareAgent';

export const DirectQueryServiceBundle = [
  DirectQueryServiceMixin as Mixin,
  SoftwareAgentMixin as Mixin];
