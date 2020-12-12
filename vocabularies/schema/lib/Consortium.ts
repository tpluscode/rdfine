import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizationMixin } from './Organization';

export interface Consortium<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
}

export function ConsortiumMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Consortium> & RdfResourceCore> & Base {
  @namespace(schema)
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
