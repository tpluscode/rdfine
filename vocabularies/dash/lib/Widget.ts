import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource.js';

export interface Widget<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function WidgetMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Widget> & RdfResourceCore> & Base {
  @namespace(dash)
  class WidgetClass extends RdfsResourceMixin(Resource) implements Partial<Widget> {
  }
  return WidgetClass
}

class WidgetImpl extends WidgetMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Widget>) {
    super(arg, init)
    this.types.add(dash.Widget)
  }

  static readonly __mixins: Mixin[] = [WidgetMixin, RdfsResourceMixin];
}
WidgetMixin.appliesTo = dash.Widget
WidgetMixin.Class = WidgetImpl

export const fromPointer = createFactory<Widget>([RdfsResourceMixin, WidgetMixin], { types: [dash.Widget] });
