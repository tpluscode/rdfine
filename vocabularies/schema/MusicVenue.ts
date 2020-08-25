import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';

export interface MusicVenue extends Schema.CivicStructure, RdfResource {
}

export function MusicVenueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicVenueClass extends CivicStructureMixin(Resource) implements MusicVenue {
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
