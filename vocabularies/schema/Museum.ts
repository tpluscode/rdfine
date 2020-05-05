import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';

export interface Museum extends Schema.CivicStructure, RdfResource {
}

export function MuseumMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MuseumClass extends CivicStructureMixin(Resource) implements Museum {
  }
  return MuseumClass
}

class MuseumImpl extends MuseumMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Museum>) {
    super(arg, init)
    this.types.add(schema.Museum)
  }

  static readonly __mixins: Mixin[] = [MuseumMixin, CivicStructureMixin];
}
MuseumMixin.appliesTo = schema.Museum
MuseumMixin.Class = MuseumImpl
