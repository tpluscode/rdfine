import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface VisualArtwork extends Schema.CreativeWork, RdfResource {
  artEdition: number | string;
  artform: rdf.Term;
  artformLiteral: string;
  artMedium: rdf.Term;
  artMediumLiteral: string;
  artworkSurface: rdf.Term;
  artworkSurfaceLiteral: string;
  depth: Schema.Distance | Schema.QuantitativeValue;
  height: Schema.Distance | Schema.QuantitativeValue;
  surface: rdf.Term;
  surfaceLiteral: string;
  width: Schema.Distance | Schema.QuantitativeValue;
}

export default function VisualArtworkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VisualArtworkClass extends CreativeWorkMixin(Resource) implements VisualArtwork {
    @property.literal()
    artEdition!: number | string;
    @property()
    artform!: rdf.Term;
    @property.literal({ path: schema.artform })
    artformLiteral!: string;
    @property()
    artMedium!: rdf.Term;
    @property.literal({ path: schema.artMedium })
    artMediumLiteral!: string;
    @property()
    artworkSurface!: rdf.Term;
    @property.literal({ path: schema.artworkSurface })
    artworkSurfaceLiteral!: string;
    @property.resource()
    depth!: Schema.Distance | Schema.QuantitativeValue;
    @property.resource()
    height!: Schema.Distance | Schema.QuantitativeValue;
    @property()
    surface!: rdf.Term;
    @property.literal({ path: schema.surface })
    surfaceLiteral!: string;
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
