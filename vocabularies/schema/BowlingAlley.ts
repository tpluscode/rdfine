import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { SportsActivityLocationMixin } from './SportsActivityLocation';

export interface BowlingAlley extends Schema.SportsActivityLocation, RdfResource {
}

export function BowlingAlleyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BowlingAlleyClass extends SportsActivityLocationMixin(Resource) implements BowlingAlley {
  }
  return BowlingAlleyClass
}

class BowlingAlleyImpl extends BowlingAlleyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BowlingAlley>) {
    super(arg, init)
    this.types.add(schema.BowlingAlley)
  }

  static readonly __mixins: Mixin[] = [BowlingAlleyMixin, SportsActivityLocationMixin];
}
BowlingAlleyMixin.appliesTo = schema.BowlingAlley
BowlingAlleyMixin.Class = BowlingAlleyImpl
