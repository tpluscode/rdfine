import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlaceMixin } from './Place.js';

export interface TouristDestination<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, rdfine.RdfResource<D> {
  includesAttraction: Schema.TouristAttraction<D> | undefined;
  touristType: Schema.Audience<D> | undefined;
  touristTypeLiteral: string | undefined;
}

export function TouristDestinationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TouristDestination> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TouristDestinationClass extends PlaceMixin(Resource) implements Partial<TouristDestination> {
    @rdfine.property.resource()
    includesAttraction: Schema.TouristAttraction | undefined;
    @rdfine.property.resource()
    touristType: Schema.Audience | undefined;
    @rdfine.property.literal({ path: schema.touristType })
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

export const fromPointer = createFactory<TouristDestination>([PlaceMixin, TouristDestinationMixin], { types: [schema.TouristDestination] });
