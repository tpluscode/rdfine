import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkSeriesMixin } from './CreativeWorkSeries';

export interface Periodical<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWorkSeries<ID>, RdfResource<ID> {
}

export function PeriodicalMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PeriodicalClass extends CreativeWorkSeriesMixin(Resource) implements Periodical {
  }
  return PeriodicalClass
}

class PeriodicalImpl extends PeriodicalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Periodical>) {
    super(arg, init)
    this.types.add(schema.Periodical)
  }

  static readonly __mixins: Mixin[] = [PeriodicalMixin, CreativeWorkSeriesMixin];
}
PeriodicalMixin.appliesTo = schema.Periodical
PeriodicalMixin.Class = PeriodicalImpl
