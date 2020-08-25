import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';

export interface PerformingArtsTheater extends Schema.CivicStructure, RdfResource {
}

export function PerformingArtsTheaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PerformingArtsTheaterClass extends CivicStructureMixin(Resource) implements PerformingArtsTheater {
  }
  return PerformingArtsTheaterClass
}

class PerformingArtsTheaterImpl extends PerformingArtsTheaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PerformingArtsTheater>) {
    super(arg, init)
    this.types.add(schema.PerformingArtsTheater)
  }

  static readonly __mixins: Mixin[] = [PerformingArtsTheaterMixin, CivicStructureMixin];
}
PerformingArtsTheaterMixin.appliesTo = schema.PerformingArtsTheater
PerformingArtsTheaterMixin.Class = PerformingArtsTheaterImpl
