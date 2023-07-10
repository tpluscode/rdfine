import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness.js';

export interface AutoRental<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, rdfine.RdfResource<D> {
}

export function AutoRentalMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AutoRental & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AutoRentalClass extends AutomotiveBusinessMixin(Resource) {
  }
  return AutoRentalClass as any
}

class AutoRentalImpl extends AutoRentalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutoRental>) {
    super(arg, init)
    this.types.add(schema.AutoRental)
  }

  static readonly __mixins: Mixin[] = [AutoRentalMixin, AutomotiveBusinessMixin];
}
AutoRentalMixin.appliesTo = schema.AutoRental
AutoRentalMixin.Class = AutoRentalImpl

export const fromPointer = createFactory<AutoRental>([AutomotiveBusinessMixin, AutoRentalMixin], { types: [schema.AutoRental] });
