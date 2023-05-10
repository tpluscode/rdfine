import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface VisualArtwork<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  artEdition: number | string | undefined;
  artform: string | undefined;
  artformTerm: RDF.NamedNode | undefined;
  artist: Schema.Person<D> | undefined;
  artMedium: string | undefined;
  artMediumTerm: RDF.NamedNode | undefined;
  artworkSurface: string | undefined;
  artworkSurfaceTerm: RDF.NamedNode | undefined;
  colorist: Schema.Person<D> | undefined;
  depth: Schema.Distance<D> | Schema.QuantitativeValue<D> | undefined;
  height: Schema.Distance<D> | Schema.QuantitativeValue<D> | undefined;
  inker: Schema.Person<D> | undefined;
  letterer: Schema.Person<D> | undefined;
  penciler: Schema.Person<D> | undefined;
  surface: string | undefined;
  surfaceTerm: RDF.NamedNode | undefined;
  width: Schema.Distance<D> | Schema.QuantitativeValue<D> | undefined;
}

export function VisualArtworkMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<VisualArtwork> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class VisualArtworkClass extends CreativeWorkMixin(Resource) implements Partial<VisualArtwork> {
    @rdfine.property.literal()
    artEdition: number | string | undefined;
    @rdfine.property.literal()
    artform: string | undefined;
    @rdfine.property({ path: schema.artform })
    artformTerm: RDF.NamedNode | undefined;
    @rdfine.property.resource()
    artist: Schema.Person | undefined;
    @rdfine.property.literal()
    artMedium: string | undefined;
    @rdfine.property({ path: schema.artMedium })
    artMediumTerm: RDF.NamedNode | undefined;
    @rdfine.property.literal()
    artworkSurface: string | undefined;
    @rdfine.property({ path: schema.artworkSurface })
    artworkSurfaceTerm: RDF.NamedNode | undefined;
    @rdfine.property.resource()
    colorist: Schema.Person | undefined;
    @rdfine.property.resource()
    depth: Schema.Distance | Schema.QuantitativeValue | undefined;
    @rdfine.property.resource()
    height: Schema.Distance | Schema.QuantitativeValue | undefined;
    @rdfine.property.resource()
    inker: Schema.Person | undefined;
    @rdfine.property.resource()
    letterer: Schema.Person | undefined;
    @rdfine.property.resource()
    penciler: Schema.Person | undefined;
    @rdfine.property.literal()
    surface: string | undefined;
    @rdfine.property({ path: schema.surface })
    surfaceTerm: RDF.NamedNode | undefined;
    @rdfine.property.resource()
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

export const fromPointer = createFactory<VisualArtwork>([CreativeWorkMixin, VisualArtworkMixin], { types: [schema.VisualArtwork] });
