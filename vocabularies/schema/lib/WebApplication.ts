import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { SoftwareApplicationMixin } from './SoftwareApplication.js';

export interface WebApplication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SoftwareApplication<D>, rdfine.RdfResource<D> {
  browserRequirements: string | undefined;
}

export function WebApplicationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<WebApplication> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WebApplicationClass extends SoftwareApplicationMixin(Resource) implements Partial<WebApplication> {
    @rdfine.property.literal()
    browserRequirements: string | undefined;
  }
  return WebApplicationClass
}

class WebApplicationImpl extends WebApplicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WebApplication>) {
    super(arg, init)
    this.types.add(schema.WebApplication)
  }

  static readonly __mixins: Mixin[] = [WebApplicationMixin, SoftwareApplicationMixin];
}
WebApplicationMixin.appliesTo = schema.WebApplication
WebApplicationMixin.Class = WebApplicationImpl

export const fromPointer = createFactory<WebApplication>([SoftwareApplicationMixin, WebApplicationMixin], { types: [schema.WebApplication] });
