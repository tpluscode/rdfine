import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { ConceptMixin } from './Concept';

export interface Proxy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Concept<D>, RdfResource<D> {
  proxyFor: Rico.RecordResource<D> | undefined;
  proxyIn: Rico.RecordSet<D> | undefined;
}

export function ProxyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Proxy> & RdfResourceCore> & Base {
  @namespace(rico)
  class ProxyClass extends ConceptMixin(Resource) implements Partial<Proxy> {
    @property.resource({ implicitTypes: [rico.RecordResource] })
    proxyFor: Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.RecordSet] })
    proxyIn: Rico.RecordSet | undefined;
  }
  return ProxyClass
}

class ProxyImpl extends ProxyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Proxy>) {
    super(arg, init)
    this.types.add(rico.Proxy)
  }

  static readonly __mixins: Mixin[] = [ProxyMixin, ConceptMixin];
}
ProxyMixin.appliesTo = rico.Proxy
ProxyMixin.Class = ProxyImpl

export const fromPointer = createFactory<Proxy>([ConceptMixin, ProxyMixin], { types: [rico.Proxy] });
