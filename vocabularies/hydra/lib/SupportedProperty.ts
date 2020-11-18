import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import type * as Rdf from '@rdfine/rdf';
import { ResourceMixin } from './Resource';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface SupportedProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Resource<D>, RdfResource<D> {
  description: string | undefined;
  property: Rdf.Property<D> | undefined;
  readable: boolean | undefined;
  required: boolean | undefined;
  supportedOperation: Array<Hydra.Operation<D>>;
  title: string | undefined;
  writeable: boolean | undefined;
}

export function SupportedPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class SupportedPropertyClass extends ResourceMixin(Resource) implements SupportedProperty {
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
    writeable: boolean | undefined;
  }
  return SupportedPropertyClass
}

class SupportedPropertyImpl extends SupportedPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SupportedProperty>) {
    super(arg, init)
    this.types.add(hydra.SupportedProperty)
  }

  static readonly __mixins: Mixin[] = [SupportedPropertyMixin, ResourceMixin];
}
SupportedPropertyMixin.appliesTo = hydra.SupportedProperty
SupportedPropertyMixin.Class = SupportedPropertyImpl
