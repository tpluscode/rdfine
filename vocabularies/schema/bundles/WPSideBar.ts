import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../lib/WebPageElement';
import { WPSideBarMixin } from '../lib/WPSideBar';

export const WPSideBarBundle = [
  WebPageElementMixin as Mixin,
  WPSideBarMixin as Mixin];
