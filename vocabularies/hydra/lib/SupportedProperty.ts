import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface SupportedProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  description: string | undefined;
  property: Rdf.Property<D> | undefined;
  readable: boolean | undefined;
  required: boolean | undefined;
  supportedOperation: Array<Hydra.Operation<D>>;
  title: string | undefined;
  writable: boolean | undefined;
}

export function SupportedPropertyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SupportedProperty> & RdfResourceCore> & Base {
  @namespace(hydra)
  class SupportedPropertyClass extends Resource implements Partial<SupportedProperty> {
    @property.literal()
    description: string | undefined;
    @property.resource({ as: [RdfPropertyMixin] })
    property: Rdf.Property | undefined;
    @property.literal({ type: Boolean })
    readable: boolean | undefined;
    @property.literal({ type: Boolean })
    required: boolean | undefined;
    @property.resource({ values: 'array', implicitTypes: [hydra.Operation] })
    supportedOperation!: Array<Hydra.Operation>;
    @property.literal()
    title: string | undefined;
    @property.literal({ type: Boolean })
    writable: boolean | undefined;
  }
  return SupportedPropertyClass
}

class SupportedPropertyImpl extends SupportedPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SupportedProperty>) {
    super(arg, init)
    this.types.add(hydra.SupportedProperty)
  }

  static readonly __mixins: Mixin[] = [SupportedPropertyMixin];
}
SupportedPropertyMixin.appliesTo = hydra.SupportedProperty
SupportedPropertyMixin.Class = SupportedPropertyImpl

export const fromPointer = createFactory<SupportedProperty>([SupportedPropertyMixin], { types: [hydra.SupportedProperty] });
