import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../WebPageElement';
import { WPFooterMixin } from '../WPFooter';

export const WPFooterDependencies = [
  WebPageElementMixin as Mixin,
  WPFooterMixin as Mixin];
