import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PlaceMixin from './Place';

export interface TouristAttraction extends Schema.Place, RdfResource {
  availableLanguage: Schema.Language;
  availableLanguageLiteral: string;
  touristType: Schema.Audience;
  touristTypeLiteral: string;
}

export default function TouristAttractionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TouristAttractionClass extends PlaceMixin(Resource) implements TouristAttraction {
    @property.resource()
    availableLanguage!: Schema.Language;
    @property.literal({ path: schema.availableLanguage })
    availableLanguageLiteral!: string;
    @property.resource()
    touristType!: Schema.Audience;
    @property.literal({ path: schema.touristType })
    touristTypeLiteral!: string;
  }
  return TouristAttractionClass
}

class TouristAttractionImpl extends TouristAttractionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TouristAttraction)
  }
}
TouristAttractionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TouristAttraction)
TouristAttractionMixin.Class = TouristAttractionImpl
