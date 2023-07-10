import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface APIStatus<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
}

export function APIStatusMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<APIStatus & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class APIStatusClass extends RdfsResourceMixin(Resource) {
  }
  return APIStatusClass as any
}

class APIStatusImpl extends APIStatusMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<APIStatus>) {
    super(arg, init)
    this.types.add(dash.APIStatus)
  }

  static readonly __mixins: Mixin[] = [APIStatusMixin, RdfsResourceMixin];
}
APIStatusMixin.appliesTo = dash.APIStatus
APIStatusMixin.Class = APIStatusImpl

export const fromPointer = createFactory<APIStatus>([RdfsResourceMixin, APIStatusMixin], { types: [dash.APIStatus] });
