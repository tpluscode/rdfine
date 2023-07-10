import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { WidgetMixin } from './Widget.js';

export interface Viewer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Widget<D>, rdfine.RdfResource<D> {
}

export function ViewerMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Viewer & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ViewerClass extends WidgetMixin(Resource) {
  }
  return ViewerClass as any
}

class ViewerImpl extends ViewerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Viewer>) {
    super(arg, init)
    this.types.add(dash.Viewer)
  }

  static readonly __mixins: Mixin[] = [ViewerMixin, WidgetMixin];
}
ViewerMixin.appliesTo = dash.Viewer
ViewerMixin.Class = ViewerImpl

export const fromPointer = createFactory<Viewer>([WidgetMixin, ViewerMixin], { types: [dash.Viewer] });
