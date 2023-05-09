import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlaceMixin } from './Place.js';

export interface TouristAttraction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, rdfine.RdfResource<D> {
  availableLanguage: Schema.Language<D> | undefined;
  availableLanguageLiteral: string | undefined;
  touristType: Schema.Audience<D> | undefined;
  touristTypeLiteral: string | undefined;
}

export function TouristAttractionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TouristAttraction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TouristAttractionClass extends PlaceMixin(Resource) implements Partial<TouristAttraction> {
    @rdfine.property.resource()
    availableLanguage: Schema.Language | undefined;
    @rdfine.property.literal({ path: schema.availableLanguage })
    availableLanguageLiteral: string | undefined;
    @rdfine.property.resource()
    touristType: Schema.Audience | undefined;
    @rdfine.property.literal({ path: schema.touristType })
    touristTypeLiteral: string | undefined;
  }
  return TouristAttractionClass
}

class TouristAttractionImpl extends TouristAttractionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TouristAttraction>) {
    super(arg, init)
    this.types.add(schema.TouristAttraction)
  }

  static readonly __mixins: Mixin[] = [TouristAttractionMixin, PlaceMixin];
}
TouristAttractionMixin.appliesTo = schema.TouristAttraction
TouristAttractionMixin.Class = TouristAttractionImpl

export const fromPointer = createFactory<TouristAttraction>([PlaceMixin, TouristAttractionMixin], { types: [schema.TouristAttraction] });
