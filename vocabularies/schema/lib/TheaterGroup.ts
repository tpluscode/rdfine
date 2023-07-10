import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PerformingGroupMixin } from './PerformingGroup.js';

export interface TheaterGroup<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PerformingGroup<D>, rdfine.RdfResource<D> {
}

export function TheaterGroupMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TheaterGroup & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TheaterGroupClass extends PerformingGroupMixin(Resource) {
  }
  return TheaterGroupClass as any
}

class TheaterGroupImpl extends TheaterGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TheaterGroup>) {
    super(arg, init)
    this.types.add(schema.TheaterGroup)
  }

  static readonly __mixins: Mixin[] = [TheaterGroupMixin, PerformingGroupMixin];
}
TheaterGroupMixin.appliesTo = schema.TheaterGroup
TheaterGroupMixin.Class = TheaterGroupImpl

export const fromPointer = createFactory<TheaterGroup>([PerformingGroupMixin, TheaterGroupMixin], { types: [schema.TheaterGroup] });
