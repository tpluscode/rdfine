import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlaceMixin } from './Place';

export interface TouristAttraction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, RdfResource<D> {
  availableLanguage: Schema.Language<D> | undefined;
  availableLanguageLiteral: string | undefined;
  touristType: Schema.Audience<D> | undefined;
  touristTypeLiteral: string | undefined;
}

export function TouristAttractionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TouristAttraction> & RdfResourceCore> & Base {
  @namespace(schema)
  class TouristAttractionClass extends PlaceMixin(Resource) implements Partial<TouristAttraction> {
    @property.resource()
    availableLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.availableLanguage })
    availableLanguageLiteral: string | undefined;
    @property.resource()
    touristType: Schema.Audience | undefined;
    @property.literal({ path: schema.touristType })
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
