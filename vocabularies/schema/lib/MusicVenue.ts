import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface MusicVenue<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function MusicVenueMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MusicVenue & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MusicVenueClass extends CivicStructureMixin(Resource) {
  }
  return MusicVenueClass as any
}

class MusicVenueImpl extends MusicVenueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicVenue>) {
    super(arg, init)
    this.types.add(schema.MusicVenue)
  }

  static readonly __mixins: Mixin[] = [MusicVenueMixin, CivicStructureMixin];
}
MusicVenueMixin.appliesTo = schema.MusicVenue
MusicVenueMixin.Class = MusicVenueImpl

export const fromPointer = createFactory<MusicVenue>([CivicStructureMixin, MusicVenueMixin], { types: [schema.MusicVenue] });
