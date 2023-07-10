import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ServiceMixin } from './Service.js';

export interface GraphService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Service<D>, rdfine.RdfResource<D> {
}

export function GraphServiceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GraphService & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class GraphServiceClass extends ServiceMixin(Resource) {
  }
  return GraphServiceClass as any
}

class GraphServiceImpl extends GraphServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GraphService>) {
    super(arg, init)
    this.types.add(dash.GraphService)
  }

  static readonly __mixins: Mixin[] = [GraphServiceMixin, ServiceMixin];
}
GraphServiceMixin.appliesTo = dash.GraphService
GraphServiceMixin.Class = GraphServiceImpl

export const fromPointer = createFactory<GraphService>([ServiceMixin, GraphServiceMixin], { types: [dash.GraphService] });
