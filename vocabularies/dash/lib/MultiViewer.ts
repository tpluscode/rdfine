import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ViewerMixin } from './Viewer.js';

export interface MultiViewer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Viewer<D>, rdfine.RdfResource<D> {
}

export function MultiViewerMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MultiViewer & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class MultiViewerClass extends ViewerMixin(Resource) {
  }
  return MultiViewerClass as any
}

class MultiViewerImpl extends MultiViewerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MultiViewer>) {
    super(arg, init)
    this.types.add(dash.MultiViewer)
  }

  static readonly __mixins: Mixin[] = [MultiViewerMixin, ViewerMixin];
}
MultiViewerMixin.appliesTo = dash.MultiViewer
MultiViewerMixin.Class = MultiViewerImpl

export const fromPointer = createFactory<MultiViewer>([ViewerMixin, MultiViewerMixin], { types: [dash.MultiViewer] });
