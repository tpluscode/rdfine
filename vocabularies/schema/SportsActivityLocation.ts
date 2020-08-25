import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface SportsActivityLocation extends Schema.LocalBusiness, RdfResource {
}

export function SportsActivityLocationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SportsActivityLocationClass extends LocalBusinessMixin(Resource) implements SportsActivityLocation {
  }
  return SportsActivityLocationClass
}

class SportsActivityLocationImpl extends SportsActivityLocationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SportsActivityLocation>) {
    super(arg, init)
    this.types.add(schema.SportsActivityLocation)
  }

  static readonly __mixins: Mixin[] = [SportsActivityLocationMixin, LocalBusinessMixin];
}
SportsActivityLocationMixin.appliesTo = schema.SportsActivityLocation
SportsActivityLocationMixin.Class = SportsActivityLocationImpl
