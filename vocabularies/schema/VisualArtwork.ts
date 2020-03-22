import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface VisualArtwork extends Schema.CreativeWork, RdfResource {
  artEdition: number | string;
  artform: string | string;
  artMedium: string | string;
  artworkSurface: string | string;
  depth: Schema.Distance | Schema.QuantitativeValue;
  height: Schema.Distance | Schema.QuantitativeValue;
  surface: string | string;
  width: Schema.Distance | Schema.QuantitativeValue;
}

export default function VisualArtworkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VisualArtworkClass extends CreativeWorkMixin(Resource) implements VisualArtwork {
    @property.literal()
    artEdition!: number | string;
    @property.literal()
    artform!: string | string;
    @property.literal()
    artMedium!: string | string;
    @property.literal()
    artworkSurface!: string | string;
    @property.resource()
    depth!: Schema.Distance | Schema.QuantitativeValue;
    @property.resource()
    height!: Schema.Distance | Schema.QuantitativeValue;
    @property.literal()
    surface!: string | string;
    @property.resource()
    width!: Schema.Distance | Schema.QuantitativeValue;
  }
  return VisualArtworkClass
}

class VisualArtworkImpl extends VisualArtworkMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.VisualArtwork)
  }
}
VisualArtworkMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VisualArtwork)
VisualArtworkMixin.Class = VisualArtworkImpl
