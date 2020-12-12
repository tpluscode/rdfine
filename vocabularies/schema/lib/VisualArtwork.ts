import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface VisualArtwork<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
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

export function VisualArtworkMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<VisualArtwork> & RdfResourceCore> & Base {
  @namespace(schema)
  class VisualArtworkClass extends CreativeWorkMixin(Resource) implements Partial<VisualArtwork> {
    @property.literal()
    artEdition: number | string | undefined;
    @property.literal()
    artform: string | undefined;
    @property({ path: schema.artform })
    artformTerm: RDF.NamedNode | undefined;
    @property.resource()
    artist: Schema.Person | undefined;
    @property.literal()
    artMedium: string | undefined;
    @property({ path: schema.artMedium })
    artMediumTerm: RDF.NamedNode | undefined;
    @property.literal()
    artworkSurface: string | undefined;
    @property({ path: schema.artworkSurface })
    artworkSurfaceTerm: RDF.NamedNode | undefined;
    @property.resource()
    colorist: Schema.Person | undefined;
    @property.resource()
    depth: Schema.Distance | Schema.QuantitativeValue | undefined;
    @property.resource()
    height: Schema.Distance | Schema.QuantitativeValue | undefined;
    @property.resource()
    inker: Schema.Person | undefined;
    @property.resource()
    letterer: Schema.Person | undefined;
    @property.resource()
    penciler: Schema.Person | undefined;
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

export const fromPointer = createFactory<VisualArtwork>([CreativeWorkMixin, VisualArtworkMixin], { types: [schema.VisualArtwork] });
