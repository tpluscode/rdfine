import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '.';
import { ResourceMixin } from './Resource';
import { IriTemplateExMixin } from './extensions/IriTemplateEx';

export interface IriTemplate<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Resource<D>, RdfResource<D> {
  mapping: Array<Hydra.IriTemplateMapping<D>>;
  template: string | undefined;
  variableRepresentation: Hydra.VariableRepresentation<D> | undefined;
}

export function IriTemplateMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class IriTemplateClass extends ResourceMixin(Resource) implements Partial<IriTemplate> {
    @property.resource({ values: 'array', implicitTypes: [hydra.IriTemplateMapping] })
    mapping!: Array<Hydra.IriTemplateMapping>;
    @property.literal({ datatype: $rdf.namedNode('http://www.w3.org/ns/hydra/core#Rfc6570Template') })
    template: string | undefined;
    @property.resource({ implicitTypes: [hydra.VariableRepresentation] })
    variableRepresentation: Hydra.VariableRepresentation | undefined;
  }
  return IriTemplateClass
}

class IriTemplateImpl extends IriTemplateExMixin(IriTemplateMixin(RdfResourceImpl)) {
  constructor(arg: ResourceNode, init?: Initializer<IriTemplate>) {
    super(arg, init)
    this.types.add(hydra.IriTemplate)
  }

  static readonly __mixins: Mixin[] = [IriTemplateExMixin, IriTemplateMixin, ResourceMixin];
}
IriTemplateMixin.appliesTo = hydra.IriTemplate
IriTemplateMixin.Class = IriTemplateImpl
