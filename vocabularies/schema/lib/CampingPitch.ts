import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AccommodationMixin } from './Accommodation.js';

export interface CampingPitch<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Accommodation<D>, RdfResource<D> {
}

export function CampingPitchMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CampingPitch> & RdfResourceCore> & Base {
  @namespace(schema)
  class CampingPitchClass extends AccommodationMixin(Resource) implements Partial<CampingPitch> {
  }
  return CampingPitchClass
}

class CampingPitchImpl extends CampingPitchMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CampingPitch>) {
    super(arg, init)
    this.types.add(schema.CampingPitch)
  }

  static readonly __mixins: Mixin[] = [CampingPitchMixin, AccommodationMixin];
}
CampingPitchMixin.appliesTo = schema.CampingPitch
CampingPitchMixin.Class = CampingPitchImpl

export const fromPointer = createFactory<CampingPitch>([AccommodationMixin, CampingPitchMixin], { types: [schema.CampingPitch] });
