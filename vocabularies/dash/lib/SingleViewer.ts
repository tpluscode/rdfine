import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ViewerMixin } from './Viewer.js';

export interface SingleViewer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Viewer<D>, rdfine.RdfResource<D> {
}

export function SingleViewerMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SingleViewer & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class SingleViewerClass extends ViewerMixin(Resource) {
  }
  return SingleViewerClass as any
}

class SingleViewerImpl extends SingleViewerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SingleViewer>) {
    super(arg, init)
    this.types.add(dash.SingleViewer)
  }

  static readonly __mixins: Mixin[] = [SingleViewerMixin, ViewerMixin];
}
SingleViewerMixin.appliesTo = dash.SingleViewer
SingleViewerMixin.Class = SingleViewerImpl

export const fromPointer = createFactory<SingleViewer>([ViewerMixin, SingleViewerMixin], { types: [dash.SingleViewer] });
