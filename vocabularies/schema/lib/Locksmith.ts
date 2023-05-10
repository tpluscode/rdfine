import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness.js';

export interface Locksmith<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HomeAndConstructionBusiness<D>, rdfine.RdfResource<D> {
}

export function LocksmithMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Locksmith> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LocksmithClass extends HomeAndConstructionBusinessMixin(Resource) implements Partial<Locksmith> {
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

export const fromPointer = createFactory<Locksmith>([HomeAndConstructionBusinessMixin, LocksmithMixin], { types: [schema.Locksmith] });
