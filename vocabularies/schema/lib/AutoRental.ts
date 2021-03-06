import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness';

export interface AutoRental<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, RdfResource<D> {
}

export function AutoRentalMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AutoRental> & RdfResourceCore> & Base {
  @namespace(schema)
  class AutoRentalClass extends AutomotiveBusinessMixin(Resource) implements Partial<AutoRental> {
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

export const fromPointer = createFactory<AutoRental>([AutomotiveBusinessMixin, AutoRentalMixin], { types: [schema.AutoRental] });
