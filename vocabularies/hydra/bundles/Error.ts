import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StatusMixin } from '../lib/Status';
import { ErrorMixin } from '../lib/Error';

export const ErrorBundle = [
  StatusMixin as Mixin,
  ErrorMixin as Mixin];
