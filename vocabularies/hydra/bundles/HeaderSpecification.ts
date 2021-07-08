import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { HeaderSpecificationMixin } from '../lib/HeaderSpecification';

export const HeaderSpecificationBundle = [
  ResourceMixin as Mixin,
  HeaderSpecificationMixin as Mixin];
