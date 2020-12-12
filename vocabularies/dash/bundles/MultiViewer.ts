import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ViewerMixin } from '../lib/Viewer';
import { MultiViewerMixin } from '../lib/MultiViewer';

export const MultiViewerBundle = [
  ViewerMixin as Mixin,
  MultiViewerMixin as Mixin];
