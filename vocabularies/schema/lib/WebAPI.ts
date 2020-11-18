import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ServiceMixin } from './Service';

export interface WebAPI<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Service<D>, RdfResource<D> {
  documentation: Schema.CreativeWork<D> | undefined;
}

export function WebAPIMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebAPIClass extends ServiceMixin(Resource) implements WebAPI {
    @property.resource()
    documentation: Schema.CreativeWork | undefined;
  }
  return WebAPIClass
}

class WebAPIImpl extends WebAPIMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WebAPI>) {
    super(arg, init)
    this.types.add(schema.WebAPI)
  }

  static readonly __mixins: Mixin[] = [WebAPIMixin, ServiceMixin];
}
WebAPIMixin.appliesTo = schema.WebAPI
WebAPIMixin.Class = WebAPIImpl
