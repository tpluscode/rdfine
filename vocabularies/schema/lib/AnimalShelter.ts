import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface AnimalShelter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
}

export function AnimalShelterMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AnimalShelter & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AnimalShelterClass extends LocalBusinessMixin(Resource) {
  }
  return AnimalShelterClass as any
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
