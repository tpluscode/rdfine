import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ChurchMixin } from './Church.js';

export interface CatholicChurch<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Church<D>, rdfine.RdfResource<D> {
}

export function CatholicChurchMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<CatholicChurch> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CatholicChurchClass extends ChurchMixin(Resource) implements Partial<CatholicChurch> {
  }
  return CatholicChurchClass
}

class CatholicChurchImpl extends CatholicChurchMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CatholicChurch>) {
    super(arg, init)
    this.types.add(schema.CatholicChurch)
  }

  static readonly __mixins: Mixin[] = [CatholicChurchMixin, ChurchMixin];
}
CatholicChurchMixin.appliesTo = schema.CatholicChurch
CatholicChurchMixin.Class = CatholicChurchImpl

export const fromPointer = createFactory<CatholicChurch>([ChurchMixin, CatholicChurchMixin], { types: [schema.CatholicChurch] });
