import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';
import { SportsActivityLocationMixin } from './SportsActivityLocation';

export interface StadiumOrArena<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, Schema.SportsActivityLocation<D>, RdfResource<D> {
}

export function StadiumOrArenaMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<StadiumOrArena> & RdfResourceCore> & Base {
  @namespace(schema)
  class StadiumOrArenaClass extends SportsActivityLocationMixin(CivicStructureMixin(Resource)) implements Partial<StadiumOrArena> {
  }
  return StadiumOrArenaClass
}

class StadiumOrArenaImpl extends StadiumOrArenaMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<StadiumOrArena>) {
    super(arg, init)
    this.types.add(schema.StadiumOrArena)
  }

  static readonly __mixins: Mixin[] = [StadiumOrArenaMixin, CivicStructureMixin, SportsActivityLocationMixin];
}
StadiumOrArenaMixin.appliesTo = schema.StadiumOrArena
StadiumOrArenaMixin.Class = StadiumOrArenaImpl
