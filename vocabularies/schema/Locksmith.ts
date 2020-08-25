import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness';

export interface Locksmith extends Schema.HomeAndConstructionBusiness, RdfResource {
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
