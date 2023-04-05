import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface MusicVenue<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function MusicVenueMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MusicVenue> & RdfResourceCore> & Base {
  @namespace(schema)
  class MusicVenueClass extends CivicStructureMixin(Resource) implements Partial<MusicVenue> {
  }
  return MusicVenueClass
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
