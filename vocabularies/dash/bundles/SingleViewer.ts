import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SingleViewerMixin } from '../lib/SingleViewer';
import { ViewerMixin } from '../lib/Viewer';

export const SingleViewerBundle = [
  SingleViewerMixin as Mixin,
  ViewerMixin as Mixin];
