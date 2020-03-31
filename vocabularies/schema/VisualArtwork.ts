import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface VisualArtwork extends Schema.CreativeWork, RdfResource {
  artEdition: number | string;
  artform: string;
  artformTerm: rdf.NamedNode;
  artMedium: string;
  artMediumTerm: rdf.NamedNode;
  artworkSurface: string;
  artworkSurfaceTerm: rdf.NamedNode;
  depth: Schema.Distance | Schema.QuantitativeValue;
  height: Schema.Distance | Schema.QuantitativeValue;
  surface: string;
  surfaceTerm: rdf.NamedNode;
  width: Schema.Distance | Schema.QuantitativeValue;
}

export default function VisualArtworkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VisualArtworkClass extends CreativeWorkMixin(Resource) implements VisualArtwork {
    @property.literal()
    artEdition!: number | string;
    @property.literal()
    artform!: string;
    @property({ path: schema.artform })
    artformTerm!: rdf.NamedNode;
    @property.literal()
    artMedium!: string;
    @property({ path: schema.artMedium })
    artMediumTerm!: rdf.NamedNode;
    @property.literal()
    artworkSurface!: string;
    @property({ path: schema.artworkSurface })
    artworkSurfaceTerm!: rdf.NamedNode;
    @property.resource()
    depth!: Schema.Distance | Schema.QuantitativeValue;
    @property.resource()
    height!: Schema.Distance | Schema.QuantitativeValue;
    @property.literal()
    surface!: string;
    @property({ path: schema.surface })
    surfaceTerm!: rdf.NamedNode;
    @property.resource()
    width!: Schema.Distance | Schema.QuantitativeValue;
  }
  return VisualArtworkClass
}

class VisualArtworkImpl extends VisualArtworkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VisualArtwork>) {
    super(arg, init)
    this.types.add(schema.VisualArtwork)
  }
}
VisualArtworkMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VisualArtwork)
VisualArtworkMixin.Class = VisualArtworkImpl
