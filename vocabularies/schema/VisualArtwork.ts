import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface VisualArtwork extends Schema.CreativeWork, RdfResource {
  artEdition: number | string;
  artform: string;
  artformTerm: RDF.NamedNode;
  artMedium: string;
  artMediumTerm: RDF.NamedNode;
  artworkSurface: string;
  artworkSurfaceTerm: RDF.NamedNode;
  depth: Schema.Distance | Schema.QuantitativeValue;
  height: Schema.Distance | Schema.QuantitativeValue;
  surface: string;
  surfaceTerm: RDF.NamedNode;
  width: Schema.Distance | Schema.QuantitativeValue;
}

export function VisualArtworkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VisualArtworkClass extends CreativeWorkMixin(Resource) implements VisualArtwork {
    @property.literal()
    artEdition!: number | string;
    @property.literal()
    artform!: string;
    @property({ path: schema.artform })
    artformTerm!: RDF.NamedNode;
    @property.literal()
    artMedium!: string;
    @property({ path: schema.artMedium })
    artMediumTerm!: RDF.NamedNode;
    @property.literal()
    artworkSurface!: string;
    @property({ path: schema.artworkSurface })
    artworkSurfaceTerm!: RDF.NamedNode;
    @property.resource()
    depth!: Schema.Distance | Schema.QuantitativeValue;
    @property.resource()
    height!: Schema.Distance | Schema.QuantitativeValue;
    @property.literal()
    surface!: string;
    @property({ path: schema.surface })
    surfaceTerm!: RDF.NamedNode;
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

  static readonly __mixins: Mixin[] = [VisualArtworkMixin, CreativeWorkMixin];
}
VisualArtworkMixin.appliesTo = schema.VisualArtwork
VisualArtworkMixin.Class = VisualArtworkImpl
