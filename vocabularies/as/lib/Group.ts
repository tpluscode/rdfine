import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ObjectMixin } from './Object.js';

export interface Group<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
}

export function GroupMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Group> & RdfResourceCore> & Base {
  @namespace(as)
  class GroupClass extends ObjectMixin(Resource) implements Partial<Group> {
  }
  return GroupClass
}

class GroupImpl extends GroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Group>) {
    super(arg, init)
    this.types.add(as.Group)
  }

  static readonly __mixins: Mixin[] = [GroupMixin, ObjectMixin];
}
GroupMixin.appliesTo = as.Group
GroupMixin.Class = GroupImpl

export const fromPointer = createFactory<Group>([ObjectMixin, GroupMixin], { types: [as.Group] });
