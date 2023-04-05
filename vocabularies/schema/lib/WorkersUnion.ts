import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';

export interface WorkersUnion<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
}

export function WorkersUnionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WorkersUnion> & RdfResourceCore> & Base {
  @namespace(schema)
  class WorkersUnionClass extends OrganizationMixin(Resource) implements Partial<WorkersUnion> {
  }
  return WorkersUnionClass
}

class WorkersUnionImpl extends WorkersUnionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WorkersUnion>) {
    super(arg, init)
    this.types.add(schema.WorkersUnion)
  }

  static readonly __mixins: Mixin[] = [WorkersUnionMixin, OrganizationMixin];
}
WorkersUnionMixin.appliesTo = schema.WorkersUnion
WorkersUnionMixin.Class = WorkersUnionImpl

export const fromPointer = createFactory<WorkersUnion>([OrganizationMixin, WorkersUnionMixin], { types: [schema.WorkersUnion] });
