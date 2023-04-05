import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface AnimalShelter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function AnimalShelterMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AnimalShelter> & RdfResourceCore> & Base {
  @namespace(schema)
  class AnimalShelterClass extends LocalBusinessMixin(Resource) implements Partial<AnimalShelter> {
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

export const fromPointer = createFactory<AnimalShelter>([LocalBusinessMixin, AnimalShelterMixin], { types: [schema.AnimalShelter] });
