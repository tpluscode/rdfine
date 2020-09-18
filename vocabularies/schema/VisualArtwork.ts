import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface VisualArtwork extends Schema.CreativeWork, RdfResource {
  artEdition: number | string | undefined;
  artform: string | undefined;
  artformTerm: RDF.NamedNode | undefined;
  artMedium: string | undefined;
  artMediumTerm: RDF.NamedNode | undefined;
  artworkSurface: string | undefined;
  artworkSurfaceTerm: RDF.NamedNode | undefined;
  depth: Schema.Distance | Schema.QuantitativeValue | undefined;
  height: Schema.Distance | Schema.QuantitativeValue | undefined;
  surface: string | undefined;
  surfaceTerm: RDF.NamedNode | undefined;
  width: Schema.Distance | Schema.QuantitativeValue | undefined;
}

export function VisualArtworkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VisualArtworkClass extends CreativeWorkMixin(Resource) implements VisualArtwork {
    @property.literal()
    artEdition: number | string | undefined;
    @property.literal()
    artform: string | undefined;
    @property({ path: schema.artform })
    artformTerm: RDF.NamedNode | undefined;
    @property.literal()
    artMedium: string | undefined;
    @property({ path: schema.artMedium })
    artMediumTerm: RDF.NamedNode | undefined;
    @property.literal()
    artworkSurface: string | undefined;
    @property({ path: schema.artworkSurface })
    artworkSurfaceTerm: RDF.NamedNode | undefined;
    @property.resource()
    depth: Schema.Distance | Schema.QuantitativeValue | undefined;
    @property.resource()
    height: Schema.Distance | Schema.QuantitativeValue | undefined;
    @property.literal()
    surface: string | undefined;
    @property({ path: schema.surface })
    surfaceTerm: RDF.NamedNode | undefined;
    @property.resource()
    width: Schema.Distance | Schema.QuantitativeValue | undefined;
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
