import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StatusMixin } from '../Status';
import { ErrorMixin } from '../Error';

export const ErrorDependencies = [
  StatusMixin as Mixin,
  ErrorMixin as Mixin];
