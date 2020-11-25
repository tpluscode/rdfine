import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness';

export interface Locksmith<ID extends ResourceNode = ResourceNode> extends Schema.HomeAndConstructionBusiness<ID>, RdfResource<ID> {
}

export function LocksmithMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LocksmithClass extends HomeAndConstructionBusinessMixin(Resource) implements Locksmith {
  }
  return LocksmithClass
}

class LocksmithImpl extends LocksmithMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Locksmith>) {
    super(arg, init)
    this.types.add(schema.Locksmith)
  }

  static readonly __mixins: Mixin[] = [LocksmithMixin, HomeAndConstructionBusinessMixin];
}
LocksmithMixin.appliesTo = schema.Locksmith
LocksmithMixin.Class = LocksmithImpl
