import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface AnimalShelter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function AnimalShelterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AnimalShelterClass extends LocalBusinessMixin(Resource) implements AnimalShelter {
  }
  return AnimalShelterClass
}

class AnimalShelterImpl extends AnimalShelterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AnimalShelter>) {
    super(arg, init)
    this.types.add(schema.AnimalShelter)
  }

  static readonly __mixins: Mixin[] = [AnimalShelterMixin, LocalBusinessMixin];
}
AnimalShelterMixin.appliesTo = schema.AnimalShelter
AnimalShelterMixin.Class = AnimalShelterImpl
