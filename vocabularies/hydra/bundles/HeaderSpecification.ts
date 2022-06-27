import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HeaderSpecificationMixin } from '../lib/HeaderSpecification';
import { ResourceMixin } from '../lib/Resource';

export const HeaderSpecificationBundle = [
  HeaderSpecificationMixin as Mixin,
  ResourceMixin as Mixin];
