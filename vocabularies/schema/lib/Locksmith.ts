import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness';

export interface Locksmith<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HomeAndConstructionBusiness<D>, RdfResource<D> {
}

export function LocksmithMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Locksmith> & RdfResourceCore> & Base {
  @namespace(schema)
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
