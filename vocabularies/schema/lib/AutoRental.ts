import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness';

export interface AutoRental<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, RdfResource<D> {
}

export function AutoRentalMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AutoRentalClass extends AutomotiveBusinessMixin(Resource) implements AutoRental {
  }
  return AutoRentalClass
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
