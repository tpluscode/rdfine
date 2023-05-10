import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ServiceMixin } from './Service.js';

export interface ResourceService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Service<D>, rdfine.RdfResource<D> {
}

export function ResourceServiceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ResourceService> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ResourceServiceClass extends ServiceMixin(Resource) implements Partial<ResourceService> {
  }
  return ResourceServiceClass
}

class ResourceServiceImpl extends ResourceServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ResourceService>) {
    super(arg, init)
    this.types.add(dash.ResourceService)
  }

  static readonly __mixins: Mixin[] = [ResourceServiceMixin, ServiceMixin];
}
ResourceServiceMixin.appliesTo = dash.ResourceService
ResourceServiceMixin.Class = ResourceServiceImpl

export const fromPointer = createFactory<ResourceService>([ServiceMixin, ResourceServiceMixin], { types: [dash.ResourceService] });
