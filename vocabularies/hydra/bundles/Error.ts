import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ErrorMixin } from '../lib/Error';
import { StatusMixin } from '../lib/Status';

export const ErrorBundle = [
  ErrorMixin as Mixin,
  StatusMixin as Mixin];
