import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkSeasonMixin } from './CreativeWorkSeason';

export interface RadioSeason<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWorkSeason<ID>, RdfResource<ID> {
}

export function RadioSeasonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RadioSeasonClass extends CreativeWorkSeasonMixin(Resource) implements RadioSeason {
  }
  return RadioSeasonClass
}

class RadioSeasonImpl extends RadioSeasonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RadioSeason>) {
    super(arg, init)
    this.types.add(schema.RadioSeason)
  }

  static readonly __mixins: Mixin[] = [RadioSeasonMixin, CreativeWorkSeasonMixin];
}
RadioSeasonMixin.appliesTo = schema.RadioSeason
RadioSeasonMixin.Class = RadioSeasonImpl
