import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlaceMixin } from './Place';

export interface TouristDestination<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, RdfResource<D> {
  includesAttraction: Schema.TouristAttraction<D> | undefined;
  touristType: Schema.Audience<D> | undefined;
  touristTypeLiteral: string | undefined;
}

export function TouristDestinationMixin<Base extends Constructor>(Resource: Base): Constructor<TouristDestination> & Base {
  @namespace(schema)
  class TouristDestinationClass extends PlaceMixin(Resource) implements TouristDestination {
    @property.resource()
    includesAttraction: Schema.TouristAttraction | undefined;
    @property.resource()
    touristType: Schema.Audience | undefined;
    @property.literal({ path: schema.touristType })
    touristTypeLiteral: string | undefined;
  }
  return TouristDestinationClass
}

class TouristDestinationImpl extends TouristDestinationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TouristDestination>) {
    super(arg, init)
    this.types.add(schema.TouristDestination)
  }

  static readonly __mixins: Mixin[] = [TouristDestinationMixin, PlaceMixin];
}
TouristDestinationMixin.appliesTo = schema.TouristDestination
TouristDestinationMixin.Class = TouristDestinationImpl
