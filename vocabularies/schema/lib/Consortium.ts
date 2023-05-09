import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';

export interface Consortium<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, rdfine.RdfResource<D> {
}

export function ConsortiumMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Consortium> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ConsortiumClass extends OrganizationMixin(Resource) implements Partial<Consortium> {
  }
  return ConsortiumClass
}

class ConsortiumImpl extends ConsortiumMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Consortium>) {
    super(arg, init)
    this.types.add(schema.Consortium)
  }

  static readonly __mixins: Mixin[] = [ConsortiumMixin, OrganizationMixin];
}
ConsortiumMixin.appliesTo = schema.Consortium
ConsortiumMixin.Class = ConsortiumImpl

export const fromPointer = createFactory<Consortium>([OrganizationMixin, ConsortiumMixin], { types: [schema.Consortium] });
