import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface AutomotiveBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
}

export function AutomotiveBusinessMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AutomotiveBusiness & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AutomotiveBusinessClass extends LocalBusinessMixin(Resource) {
  }
  return AutomotiveBusinessClass as any
}

class AutomotiveBusinessImpl extends AutomotiveBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutomotiveBusiness>) {
    super(arg, init)
    this.types.add(schema.AutomotiveBusiness)
  }

  static readonly __mixins: Mixin[] = [AutomotiveBusinessMixin, LocalBusinessMixin];
}
AutomotiveBusinessMixin.appliesTo = schema.AutomotiveBusiness
AutomotiveBusinessMixin.Class = AutomotiveBusinessImpl

export const fromPointer = createFactory<AutomotiveBusiness>([LocalBusinessMixin, AutomotiveBusinessMixin], { types: [schema.AutomotiveBusiness] });
